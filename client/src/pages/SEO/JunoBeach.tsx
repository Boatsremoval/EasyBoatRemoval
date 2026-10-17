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

export default function JunoBeach() {
  const [, setLocation] = useLocation();
   const nearbyCities = getNearbyCities("Juno Beach", 60); // find up to 60 closest
  const phone = getPhoneByCity("Juno Beach");
  
  const services = [
    "Boat Hauling & Transportation",
    "Yacht Dismantling & Scrapping",
    "Catamaran Removal",
    "Sailboat Removal & Disposal",
    "Abandoned & Derelict Boat Removal",
    "Marina & Boatyard Cleanouts"
  ];

  const serviceAreas = [
    "Juno Beach Pier",
    "Loggerhead Marinelife Center Area",
    "Intracoastal Waterway",
    "Donald Ross Road Corridor",
    "US Highway 1",
    "Ocean Drive"
  ];

  const faqs = [
    {
      question: "How fast can you remove a boat in Juno Beach?",
      answer: "We provide same-day and next-day boat removal in Juno Beach, FL. Reach out before noon and we may be able to come the same day. Emergency removals are available 24/7."
    },
    {
      question: "Which parts of Juno Beach do you cover?",
      answer: "We work in every part of Juno Beach. That includes Juno Beach Pier, Loggerhead Marinelife Center Area, Intracoastal Waterway, Donald Ross Road Corridor, US Highway 1 and Ocean Drive, as well as the nearby areas of Palm Beach County."
    },
    {
      question: "Can you remove a boat from a residential property?",
      answer: "Yes! We take boats from driveways, backyards, marinas, storage facilities and waterfront homes all over Juno Beach, and we handle the permits and logistics."
    },
    {
      question: "How much does boat removal in Juno Beach cost?",
      answer: "Our boat removal in Juno Beach is affordable, with clear pricing. The cost depends on the size and condition of the boat and how easy it is to reach. Quotes are free, and we focus only on removal and disposal — we don’t buy boats."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Juno Beach FL Boat Removal | Boat Disposal & Dismantling | Easy Boat Removal</title>
        <meta name="description" content="Professional boat removal in Juno Beach, Florida. Free quotes, same-day service and eco-friendly disposal for boats, yachts and catamarans of any size in nearby areas." />
        <meta property="og:title" content="Juno Beach FL Boat Removal | Easy Boat Removal" />
        <meta 
          property="og:description" 
          content="Professional boat removal in Juno Beach, Florida. Free quotes, same-day service and eco-friendly disposal." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://easyboatremoval.com/boat-removal-fl-juno-beach" />
      </Helmet>
     <Header cityName="Juno Beach" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Juno Beach, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-heading-main">
                Boat Removal Services in Juno Beach, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional boat disposal and dismantling for homes and businesses in Juno Beach. 
                We remove boats of every size, from small sailboats to big yachts and catamarans. 
                Fast, eco-friendly and affordable service for Palm Beach County.
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
    <RandomBoatGallery cityName="Juno Beach" count={2} />
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Easy Boat Removal</span> in Juno Beach?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trusted boat removal professionals for Juno Beach and all of Palm Beach County
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
                    We are based in Florida and know Juno Beach’s coastal environment and local rules.
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
                    Quick response, with same-day removal in Juno Beach when it is urgent.
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
                  or a derelict vessel that has to go right away, we have a full solution for Juno Beach residents.
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
                  <CardTitle>Juno Beach Areas We Cover</CardTitle>
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
                    And all nearby neighborhoods in Palm Beach County
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
                Quick, hassle-free boat removal in Juno Beach
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
                    Give us a call or fill out the online form with details about your boat and where it is in Juno Beach. 
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
                Answers to common questions about boat removal in Juno Beach
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
      to talk with our boat removal specialist for Juno Beach and all of Palm Beach County.
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
              About <span className="text-primary">Easy Boat Removal</span> in Juno Beach, Florida
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                With its clean beaches, scenic ocean views and relaxed boating lifestyle, Juno Beach stands out as a coastal town in Palm Beach County. With popular destinations like the Juno Beach Pier and the Loggerhead Marinelife Center, this lively seaside community attracts boaters and waterfront residents who often require professional and eco-friendly boat removal services.
              </p>
              <p>
                We regularly remove boats near the Juno Beach Pier, along the Intracoastal Waterway or in residential neighborhoods near Donald Ross Road and US Highway 1, and <span className="text-primary">Easy Boat Removal</span> takes care of the whole job, including eco-friendly disposal. Our crew is used to the docks, canals, driveways and storage lots of Palm Beach County, so each removal is planned ahead and done safely.
              </p>
              <p>
                We take old boats, yachts, sailboats and catamarans away from residential properties, private docks, marinas and storage yards all over Juno Beach. We do the lifting, the transport and the eco-friendly disposal, so there is nothing left for you to arrange.
              </p>
              <p>
                We remove boats throughout Palm Beach County, including Juno Beach, Jupiter, North Palm Beach and the towns around them. Reach out today for a free, no-obligation quote!
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
