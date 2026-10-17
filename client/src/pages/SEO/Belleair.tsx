import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomBoatGallery from "@/components/RandomBoatGallery";
import ServiceAreaList from "@/components/ServiceAreaList";
import { getNearbyCities } from "@/utils/getNearbyCities";
import logoImage from "@assets/Logo_easy_boat_removal.png";
import { getPhoneByCity } from "@/utils/getPhoneByCity";

export default function Belleair() {
  const [, setLocation] = useLocation();
   const nearbyCities = getNearbyCities("Belleair", 60); // find up to 60 closest
  const phone = getPhoneByCity("Belleair");
  
  const services = [
    "Boat Hauling & Transportation",
    "Yacht Dismantling & Scrapping",
    "Catamaran Removal",
    "Sailboat Removal & Disposal",
    "Abandoned & Derelict Boat Removal",
    "Marina & Boatyard Cleanouts"
  ];

  const serviceAreas = [
    "Belleair Beach",
    "Belleair Bluffs",
    "Belleair Shore",
    "Belleair Country Club",
    "Indian Rocks Road",
    "Belleview Island"
  ];

  const faqs = [
    {
      question: "How fast can you remove a boat in Belleair?",
      answer: "We provide same-day and next-day boat removal in Belleair, FL. Reach out before noon and we may be able to come the same day. Emergency removals are available 24/7."
    },
    { 
      question: "Which parts of Belleair do you cover?",
      answer: "We work in every part of Belleair. That includes Belleair Beach, Belleair Bluffs, Belleair Shore, Belleair Country Club, Indian Rocks Road and Belleview Island, as well as the nearby areas of Pinellas County." 
    },
    {
      question: "Can you remove a boat from a residential property?",
      answer: "Yes! We take boats from driveways, backyards, marinas, storage facilities and waterfront homes all over Belleair, and we handle the permits and logistics."
    },
    {
      question: "How much does boat removal in Belleair cost?",
      answer: "Our boat removal in Belleair is affordable, with clear pricing. The cost depends on the size and condition of the boat and how easy it is to reach. Quotes are free, and we focus only on removal and disposal — we don’t buy boats."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Belleair FL Boat Removal | Boat Disposal & Dismantling | Easy Boat Removal</title>
        <meta name="description" content="Professional boat removal in Belleair, Florida. Free quotes, same-day service and eco-friendly disposal for boats, yachts and catamarans of any size in nearby areas." />
        <meta property="og:title" content="Belleair FL Boat Removal | Easy Boat Removal" />
        <meta 
          property="og:description" 
          content="Professional boat removal in Belleair, Florida. Free quotes, same-day service and eco-friendly disposal." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://easyboatremoval.com/boat-removal-fl-belleair" />
      </Helmet>
     <Header cityName="Belleair" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Belleair, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-heading-main">
                Boat Removal Services in Belleair, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional boat disposal and dismantling for homes and businesses in Belleair. 
                We remove boats of every size, from small sailboats to big yachts and catamarans. 
                Fast, eco-friendly and affordable service for Pinellas County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setLocation('/quote')}
                  data-testid="button-get-quote"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = `tel:+1${phone.replace(/[^0-9]/g, "")}`}
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {phone}
                </Button>
              </div>
            </div>
          </div>
        </section>
    <RandomBoatGallery cityName="Belleair" count={2} />
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Easy Boat Removal</span> in Belleair?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trusted boat removal professionals for Belleair and all of Pinellas County
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Local Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are based in Florida and know Belleair’s coastal environment and local rules.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Same-Day Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quick response, with same-day removal in Belleair when it is urgent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Eco-Friendly Disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Responsible recycling and disposal that follows all Florida environmental guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Free Estimates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clear pricing and no hidden fees. Get a free quote within an hour.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Full Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fully licensed and insured, so you have peace of mind during the removal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>All Boat Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We remove sailboats, powerboats, yachts, catamarans and derelict vessels of any size.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Complete Boat Removal Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether it is an old boat taking up room in your driveway, a damaged boat at the marina 
                  or a derelict vessel that has to go right away, we have a full solution for Belleair residents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  size="lg" 
                  className="mt-8"
                  onClick={() => setLocation('/quote')}
                  data-testid="button-services-quote"
                >
                  Request a Free Quote
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Belleair Areas We Cover</CardTitle>
                  <CardDescription>Service in every part of the city</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded hover-elevate">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    And all nearby neighborhoods in Pinellas County
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Easy 3-Step Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick, hassle-free boat removal in Belleair
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Give us a call or fill out the online form with details about your boat and where it is in Belleair. 
                    Photos help us quote you faster.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle>Get Your Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get a free quote with no obligation within an hour!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle>We Haul It Away</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pick a time that works for you. Our crew takes care of hauling, disposal and paperwork. 
                    Your property is clear in no time!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Answers to common questions about boat removal in Belleair
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

       {/* Local Call Section with Logo */}
<section className="py-16 md:py-20 bg-muted text-center">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo */}
    <img
      src="/attached_assets/Logo_easy_boat_removal_black.png"
      alt="Easy Boat Removal logo"
      className="mx-auto mb-6 w-32 h-auto"
      loading="lazy"
    />

    {/* Local Text */}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
      Call <span className="text-primary">Easy Boat Removal</span> Now!
    </h2>
    <p className="text-lg text-muted-foreground mb-8">
      Call {" "}
      <a href={`tel:+1${phone.replace(/[^0-9]/g, "")}`} className="text-primary font-semibold hover:underline">
        {phone}
      </a>{" "}
      to talk with our boat removal specialist for Belleair and all of Pinellas County.
      The price depends on the size and condition of the boat and how easy it is to reach.
    </p>
<Button
      size="lg"
      onClick={() => setLocation("/quote")}
      data-testid="button-local-call-quote"
    >
      Get a Free Quote
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </div>
</section>
        {/* Local Content Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Easy Boat Removal</span> in Belleair, Florida
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                With its tree‑lined streets, manicured golf courses and closeness to the Gulf of Mexico and beautiful beaches, Belleair stands out as an elegant waterfront town in Pinellas County. Although compact, Belleair has a strong boating presence with nearby marinas, waterways and shoreline properties, so professional boat removal is often necessary.
              </p>
              <p>
                Is your boat sitting near the Belleair Golf Club and Country Club area, close to Belleair Beach and the shoreline or in residential neighborhoods around Belleair Bluffs and the local waterfront corridors? <span className="text-primary">Easy Boat Removal</span> can haul it away fast and dispose of it the right way. Our crew is used to the docks, canals, driveways and storage lots of Pinellas County, so each removal is planned ahead and done safely.
              </p>
              <p>
                We take old boats, sailboats, pontoons and small yachts away from private properties, marinas, storage lots and shoreline locations all over Belleair. We do the lifting, the transport and the eco-friendly disposal, so there is nothing left for you to arrange.
              </p>
              <p>
                Our service area covers all of Pinellas County, with Belleair, Belleair Beach, Belleair Bluffs, Clearwater and the towns around them. Get in touch today for a free quote!
              </p>
            </div>
          </div>
        </section>
        {/* Nearby Cities Section */}
        <ServiceAreaList cities={nearbyCities} />
      </main>

      <Footer />
    </div>
  );
}
