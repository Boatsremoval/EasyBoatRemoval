import { useState } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const boatSizes = Array.from({ length: 51 }, (_, i) => `${i + 10} ft`);

const engineTypes = ["Inboard", "Outboard", "No engine"];

const engineCounts = ["0", "1", "2", "3", "4", "5"];

const boatLocations = ["On a trailer", "In the water", "On the ground", "On a boat lift"];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Quote() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    boatSize: "",
    engineType: "",
    engineCount: "",
    boatLocation: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "Florida",
    zipCode: "",
    phone: "",
    email: "",
    images: [] as File[]
  });
  const [errors, setErrors] = useState({ phone: "" });

  const set = (field: keyof typeof formData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  // Required dropdowns can't use the browser's built-in "required" check, so they are checked here
  const missingSelect = (value: string) => triedSubmit && !value;
  const selectError = "border-red-500";

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }

          // Max dimensions to keep file size reasonable
          const MAX_WIDTH = 1920;
          const MAX_HEIGHT = 1920;

          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = (height * MAX_WIDTH) / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = (width * MAX_HEIGHT) / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Compress to JPEG with quality 0.8
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
              } else {
                reject(new Error('Compression failed'));
              }
            },
            'image/jpeg',
            0.8
          );
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 10);

      const oversizedFiles = filesArray.filter(f => f.size > 10 * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        toast({
          title: "Image Too Large",
          description: "Please select images under 10MB each.",
          variant: "destructive",
        });
        return;
      }

      try {
        const compressedImages = await Promise.all(filesArray.map(file => compressImage(file)));
        setFormData((prev) => ({ ...prev, images: compressedImages }));
      } catch (error) {
        console.error('Image compression error:', error);
        toast({
          title: "Image Processing Failed",
          description: "Please try different images.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTriedSubmit(true);

    const missing: string[] = [];
    if (!formData.boatSize) missing.push("boat length");
    if (!formData.engineType) missing.push("engine type");
    if (!formData.engineCount) missing.push("number of engines");
    if (!formData.boatLocation) missing.push("how the boat is located");
    if (missing.length) {
      toast({
        title: "Please complete the form",
        description: `Missing: ${missing.join(", ")}.`,
        variant: "destructive",
      });
      return;
    }
    if (formData.phone.replace(/\D/g, "").length !== 10) {
      setErrors({ phone: "Please enter a 10-digit phone number" });
      return;
    }
    if (formData.email && !emailOk(formData.email)) {
      toast({ title: "Check your email", description: "Please enter a valid email or leave it empty.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      // Convert images to base64
      const images = await Promise.all(
        formData.images.map(
          (file) =>
            new Promise<{ filename: string; content: string }>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve({ filename: file.name, content: (reader.result as string).split(',')[1] });
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        )
      );

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          boatSize: formData.boatSize,
          engineType: formData.engineType,
          engineCount: formData.engineCount,
          boatLocation: formData.boatLocation,
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          phone: formData.phone,
          email: formData.email,
          images: images.length > 0 ? images : undefined,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Submitted!",
          description: "We will get back to you within an hour with your boat removal quote.",
        });
        setLocation('/');
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="canonical" href="https://easyboatremoval.com/quote" />
      </Helmet>
      <Header />
      <main className="flex-1 pt-20 md:pt-24 pb-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Boat Removal Quote Request</CardTitle>
              <CardDescription className="text-base mt-4">
                <strong>Whether we pay you for a boat or you pay us to remove one, the price takes many factors into account,</strong>
              </CardDescription>
              <CardDescription className="text-sm mt-2">
                Including: age of the boat, its condition, how hard it is to get out, how hard it is to haul, demolition costs and waste fees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name (Optional)</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                {/* Boat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="boatSize">Boat Length *</Label>
                    <Select value={formData.boatSize} onValueChange={(v) => set("boatSize", v)}>
                      <SelectTrigger id="boatSize" data-testid="select-boat-size" className={missingSelect(formData.boatSize) ? selectError : ""}>
                        <SelectValue placeholder="Select boat length" />
                      </SelectTrigger>
                      <SelectContent>
                        {boatSizes.map((size) => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="boatLocation">How Is the Boat Located? *</Label>
                    <Select value={formData.boatLocation} onValueChange={(v) => set("boatLocation", v)}>
                      <SelectTrigger id="boatLocation" data-testid="select-boat-location" className={missingSelect(formData.boatLocation) ? selectError : ""}>
                        <SelectValue placeholder="Select where the boat is" />
                      </SelectTrigger>
                      <SelectContent>
                        {boatLocations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="engineType">Engine Type *</Label>
                    <Select
                      value={formData.engineType}
                      onValueChange={(v) =>
                        setFormData((prev) => ({
                          ...prev,
                          engineType: v,
                          // "No engine" means 0 engines
                          engineCount: v === "No engine" ? "0" : prev.engineCount === "0" ? "" : prev.engineCount,
                        }))
                      }
                    >
                      <SelectTrigger id="engineType" data-testid="select-engine-type" className={missingSelect(formData.engineType) ? selectError : ""}>
                        <SelectValue placeholder="Select engine type" />
                      </SelectTrigger>
                      <SelectContent>
                        {engineTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="engineCount">Number of Engines *</Label>
                    <Select value={formData.engineCount} onValueChange={(v) => set("engineCount", v)}>
                      <SelectTrigger id="engineCount" data-testid="select-engine-count" className={missingSelect(formData.engineCount) ? selectError : ""}>
                        <SelectValue placeholder="Select number of engines" />
                      </SelectTrigger>
                      <SelectContent>
                        {engineCounts.map((n) => (
                          <SelectItem key={n} value={n}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label>Boat Address *</Label>
                  <Input
                    placeholder="Address Line 1"
                    value={formData.addressLine1}
                    onChange={(e) => set("addressLine1", e.target.value)}
                    required
                    data-testid="input-address-line1"
                  />
                  <Input
                    placeholder="Address Line 2"
                    value={formData.addressLine2}
                    onChange={(e) => set("addressLine2", e.target.value)}
                    data-testid="input-address-line2"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => set("city", e.target.value)}
                      required
                      data-testid="input-city"
                    />
                    <Select value={formData.state} onValueChange={(v) => set("state", v)}>
                      <SelectTrigger data-testid="select-state">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={(e) => set("zipCode", e.target.value)}
                      required
                      data-testid="input-zip"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onKeyDown={(e) => {
                        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
                        if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) return;
                        if (!/^[0-9]$/.test(e.key)) e.preventDefault();
                      }}
                      onChange={(e) => {
                        let digits = e.target.value.replace(/\D/g, "");
                        if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
                        if (digits.length > 10) digits = digits.slice(0, 10);

                        let formatted = digits;
                        if (digits.length > 6) {
                          formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
                        } else if (digits.length > 3) {
                          formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                        } else if (digits.length > 0) {
                          formatted = `(${digits}`;
                        }

                        set("phone", formatted);
                        setErrors({ phone: digits.length === 10 ? "" : "Please enter a 10-digit phone number" });
                      }}
                      required
                      className={errors.phone ? "border-red-500" : ""}
                      data-testid="input-phone"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => set("email", e.target.value.trim())}
                      data-testid="input-email"
                    />
                  </div>
                </div>

                {/* Photos */}
                <div className="space-y-2">
                  <Label htmlFor="images">Boat Images (Optional)</Label>
                  <Input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    data-testid="input-boat-images"
                  />
                  <p className="text-xs text-muted-foreground">
                    Add up to 10 photos (10MB max each) to speed up your quote. Photos are optimized automatically.
                  </p>
                  {formData.images.length > 0 && (
                    <p className="text-sm text-foreground font-medium">
                      ✓ {formData.images.length} image(s) ready to send
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground"
                  size="lg"
                  data-testid="button-submit-quote"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
