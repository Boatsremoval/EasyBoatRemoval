import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TampaBoatRemoval() {
  const [, setLocation] = useLocation();

  // Tampa-specific service set, expanded for clarity and unique detail
  const services = [
    "Sunken boat recovery using pumps and lift bags",
    "Oversize yacht hauling with permits and escort vehicles",
    "Stabilizing and removing storm-damaged boats",
    "Derelict boat disposal with proper paperwork",
    "Canal and marina cleanouts, carefully staged",
    "Eco-friendly dismantling and recycling of materials",
    "Hauling trailer boats away from homes",
    "Tight canal removals under low bridges",
    "Removal of commercial boats and workboats",
    "Removals coordinated with insurance after bad weather"
  ];

  // Primary service areas with full ZIP coverage for Tampa, St. Petersburg, Clearwater, Sarasota
  const serviceAreas = [
    // Tampa ZIP codes (33601–33694, including PO Boxes and unique ZIPs)
    "Tampa ZIP Codes: 33601, 33602, 33603, 33604, 33605, 33606, 33607, 33608, 33609, 33610, 33611, 33612, 33613, 33614, 33615, 33616, 33617, 33618, 33619, 33620, 33621, 33622, 33623, 33624, 33625, 33626, 33629, 33630, 33631, 33633, 33634, 33635, 33637, 33646, 33647, 33650, 33655, 33660, 33661, 33662, 33663, 33664, 33672, 33673, 33674, 33675, 33677, 33679, 33680, 33681, 33682, 33684, 33685, 33686, 33687, 33688, 33689, 33694",
    // St. Petersburg ZIP codes (33701–33784, inclusive of PO Boxes and unique ZIPs)
    "St. Petersburg ZIP Codes: 33701, 33702, 33703, 33704, 33705, 33706, 33707, 33708, 33709, 33710, 33711, 33712, 33713, 33714, 33715, 33716, 33729, 33730, 33731, 33732, 33733, 33734, 33736, 33738, 33740, 33741, 33742, 33743, 33747, 33784",
    // Clearwater ZIP codes (33755–33769, including Clearwater Beach and PO Boxes)
    "Clearwater ZIP Codes: 33755, 33756, 33757, 33758, 33759, 33760, 33761, 33762, 33763, 33764, 33765, 33766, 33767, 33769",
    // Sarasota ZIP codes (34230–34277, including barrier islands and unique ZIPs)
    "Sarasota ZIP Codes: 34230, 34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238, 34239, 34240, 34241, 34242, 34243, 34249, 34260, 34276, 34277"
  ];

  // Tampa-focused FAQs with unique wording and details
  const faqs = [
    {
      question: "Do you remove storm-damaged boats from Tampa Bay marinas and canals?",
      answer:
        "Yes. After hurricanes or strong storms, we secure the site, stabilize damaged hulls and remove boats from marinas, private docks and residential canals. We work with owners and insurers to prevent further damage and get the boats safely to approved facilities fast."
    },
    {
      question: "What ZIP codes do you cover in Tampa, St. Petersburg, Clearwater and Sarasota?",
      answer:
        "We cover Tampa (33601–33694), St. Petersburg (33701–33784), Clearwater (33755–33769) and Sarasota (34230–34277). If you don’t see your ZIP code on this page, we most likely still cover your area — send us your address and any access limits for a quick, accurate quote."
    },
    {
      question: "Can you remove oversize yachts or commercial boats when road access is limited?",
      answer:
        "Yes. We get the permits and arrange escorts, routes and staging. For narrow roads and low bridges, we use compact rigs, modular gear and special trailers to move big vessels safely and legally."
    },
    {
      question: "Is your boat removal eco-friendly and compliant in Tampa Bay and nearby waters?",
      answer:
        "Yes. We put containment, recycling and responsible disposal of fuel, oil, batteries and composites first. Every job is planned to protect Tampa Bay, Old Tampa Bay and the Intracoastal, in line with Florida environmental rules and local requirements."
    },
    {
      question: "How soon can you schedule a boat removal in Tampa?",
      answer:
        "We send clear estimates quickly and can often schedule within 24–48 hours. For urgent cases — storm debris, drifting hulls or hazards to navigation — we can often assess the same day, depending on access and available equipment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Tampa Bay FL Boat Removal & Nearby Towns | Easy Boat Removal</title>
        <meta
          name="description"
          content="Boat removal in Tampa Bay, St. Petersburg, Clearwater and Sarasota. Licensed crews remove sunken boats, storm-damaged vessels, oversize yachts and derelict boats in every Tampa, Pinellas and Sarasota ZIP code."
        />
        <meta property="og:title" content="Tampa Bay FL Boat Removal | Easy Boat Removal" />
        <meta
          property="og:description"
          content="Professional boat removal in Tampa Bay and nearby towns. Free quotes, eco-friendly disposal, careful canal work and dependable scheduling for marinas, HOAs and homes."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://easyboatremoval.com/tampa-boat-removal" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Tampa Bay, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-heading-main">
                Boat Removal Services in Tampa Bay, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Boating in Tampa Bay covers quiet canals, busy marinas and open bay water. Once a boat is abandoned, damaged by a storm or just not wanted anymore, it can turn from a good memory into a liability fast. Our Tampa boat removal crews plan each job around your property, your schedule and local rules — protecting docks, seawalls and landscaping while we safely pull out and haul the boat. From raising sunken hulls to moving oversize yachts, we plan every step, keep you informed and do the work with care and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setLocation("/quote")} data-testid="button-get-quote">
                                    Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "tel:+17540000000")}
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 754-000-0000
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why pick Easy Boat Removal in Tampa Bay?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We cover Tampa, St. Petersburg, Clearwater and Sarasota with licensed crews, the right equipment and a practical approach to difficult waterfront removals. You get clear pricing, dependable timelines and documented disposal — every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>We know the local waters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We know what Tampa Bay boat removal involves: shallow inlets, tidal currents, low bridges and tight canals. Our planning protects your property and keeps disruption low while we pull out and stage the boat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Quick, organized scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quotes are clear and fast. Many removals can be booked within 24–48 hours. Bigger jobs with several boats get a coordinated schedule, route plans and on-site documentation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Eco-friendly disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recycling comes first, and we handle fuel, oil, batteries and composites with containment and proper processing to keep Tampa Bay, Old Tampa Bay and the Intracoastal clean.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Clear pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden fees. Your quote spells out access, equipment, haul route and disposal, so you know exactly what you are paying for — no surprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Licensed and insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our crews are trained and insured. From small canal removals to heavy lifts, we work with the right credentials and written safety procedures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Every type of vessel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Powerboats, sailboats, catamarans, liveaboards, workboats and yachts. Boats on trailers, beached hulls, sunken boats and derelict vessels — we remove them all responsibly and efficiently.
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
                  Complete boat removal services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The layout of Tampa Bay calls for careful planning. We match equipment and crew size to your site: compact rigs for narrow canals, lift bags for sunken boats, heavy-duty trailers for oversize yachts and staged routes for difficult transport. Every plan protects your property and the water while keeping to a reliable schedule and leaving a clean site.
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
                  onClick={() => setLocation("/quote")}
                  data-testid="button-services-quote"
                >
                                    Request a Free Quote

                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Tampa Bay areas we cover</CardTitle>
                  <CardDescription>Every ZIP code in Tampa, St. Petersburg, Clearwater and Sarasota</CardDescription>
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
                    Don’t see your ZIP code? We most likely still cover your area. Send your address, the size of the boat and access details for a quick, accurate estimate.
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
                Our easy 4-step boat removal process
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear communication, careful work and documented disposal — built for Tampa Bay’s canals and marinas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle>Details and estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Send us your ZIP code, the type and size of the boat, its condition (floating, sunken, storm-damaged) and any access limits. We reply with a clear quote and a suggested timeline, including the equipment and disposal steps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle>Site check</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We confirm access points, staging areas, bottom conditions, currents and clearances. That way the equipment fits the job and the work is safe for canals, marinas and waterfront homes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle>The removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our crew secures the boat, protects nearby structures and carries out the plan with lift systems, compact rigs, barges or heavy-duty trailers as needed. We keep the work area tight and keep you updated.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <CardTitle>Hauling and disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Boats go to approved facilities. Usable parts are recycled, and fuel, oil, batteries and composites are processed responsibly. A final cleanup leaves your property safe and tidy.
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
                                Common questions

              </h2>
              <p className="text-lg text-muted-foreground">
                Straight answers about boat removal in Tampa, St. Petersburg, Clearwater and Sarasota.
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you handle derelict boat paperwork for HOAs and marinas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. We document derelict boat removals for property owners, HOAs, marinas and cities. Our records include site photos, access notes, equipment details and proof of disposal — keeping everyone informed and compliant.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you work under low bridges and around tight canal turns?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We plan around low bridges, narrow turns and small staging areas with modular gear and careful routes. When access is very tight, we use smaller rigs or remove the boat from the water side to protect your property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How is boat removal in Tampa Bay different from other areas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tampa Bay’s shallow inlets, tides and crowded waterfronts call for detailed planning. We adjust each job to water depth, current, bottom conditions and neighborhood access — protecting docks, seawalls and landscaping while removing the boat safely.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get your boat removed in Tampa Bay?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get your free quote now. We will ask for your ZIP code, the boat type and size, its condition and access details — then give you a clear plan, a fair price and a dependable timeline to get your space back safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setLocation("/quote")}
                data-testid="button-cta-quote"
              >
                                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => (window.location.href = "tel:+17540000000")}
                data-testid="button-cta-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>754-000-0000</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Content Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Boat removal in Tampa Bay, St. Petersburg, Clearwater and Sarasota
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                The Tampa Bay waterfront runs from Davis Islands and Harbour Island to the Gandy Bridge area, Old Tampa Bay and the canals of Westshore and Town ’n’ Country. Every site has its own access, depth, current and property limits. Our boat removal plans take staging areas, low bridges, tight turns and neighborhood logistics into account — balancing safety and efficiency with respect for your property and your neighbors.
              </p>
              <p>
                St. Petersburg covers downtown marinas, Old Northeast, Shore Acres and the barrier islands near St. Pete Beach. Clearwater has both residential neighborhoods and the Clearwater Beach barrier island. Sarasota reaches from mainland canals to the waters of Lido Key and Siesta Key. We plan removal, hauling and disposal around these local conditions, with the right rigs, lift systems and routes to protect docks, seawalls and neighboring waterfronts.
              </p>
              <p>
                Difficult jobs are part of our everyday work. Sunken boats need stabilizing, lift bags, pumps and careful rigging before they can go on the road. Oversize yachts and commercial boats need permits, escorts and staged transport. Storm-damaged boats need the site secured quickly so they don’t drift or cause more damage. Derelict boats need proper paperwork plus responsible recycling and disposal. Whatever the case, we bring a practical, well-planned approach and keep you informed.
              </p>
              <p>
                We cover Tampa ZIP codes 33601, 33602, 33603, 33604, 33605, 33606, 33607, 33608, 33609, 33610, 33611,
                33612, 33613, 33614, 33615, 33616, 33617, 33618, 33619, 33620, 33621, 33622, 33623, 33624, 33625, 33626, 33629,
                33630, 33631, 33633, 33634, 33635, 33637, 33646, 33647, 33650, 33655, 33660, 33661, 33662, 33663, 33664, 33672,
                33673, 33674, 33675, 33677, 33679, 33680, 33681, 33682, 33684, 33685, 33686, 33687, 33688, 33689, and 33694; St.
                Petersburg ZIP codes 33701, 33702, 33703, 33704, 33705, 33706, 33707, 33708, 33709, 33710, 33711, 33712, 33713,
                33714, 33715, 33716, 33729, 33730, 33731, 33732, 33733, 33734, 33736, 33738, 33740, 33741, 33742, 33743, 33747,
                and 33784; Clearwater ZIP codes 33755, 33756, 33757, 33758, 33759, 33760, 33761, 33762, 33763, 33764, 33765,
                33766, 33767, and 33769; and Sarasota ZIP codes 34230, 34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238,
                34239, 34240, 34241, 34242, 34243, 34249, 34260, 34276, and 34277. If your ZIP code is close by but not listed here, send us your address and site details — we most likely cover your area.
              </p>
              <p>
                Protecting the environment matters to us. Boats carry materials that must be handled carefully. We use containment and follow written procedures to limit the impact on local waters and wildlife. Recycling is a core part of the job, not an afterthought: usable parts are saved and hazardous items are processed responsibly. This protects Tampa Bay, Old Tampa Bay, the Intracoastal and neighborhood lakes, and helps you meet your obligations as an owner, property manager or marina operator.
              </p>
              <p>
                Picking a boat removal company comes down to trust and getting the job done. We give clear quotes, explain the equipment and access involved and keep to reliable timelines. On site, our crew keeps the work area tight and updates you at every step. After the removal, hauling and disposal end with a clean property and documented recycling. It is a complete service that solves the problem without creating new ones.
              </p>
              <p>
                If a boat is taking up room, causing risk or getting in the way of your plans, we can help. Send us your ZIP code, details about the boat and access notes, and we will reply with an exact estimate and a practical plan to free up your space. From Tampa canals to St. Petersburg marinas and from Clearwater neighborhoods to the Sarasota waterfront, we are ready to handle difficult boat removals with care and professionalism.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
