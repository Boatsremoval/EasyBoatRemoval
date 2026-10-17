import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Forklift, PhoneCall, Recycle } from "lucide-react";
import heroImage from "@assets/Main3.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Ready from "@/components/Ready";
import junkBoatImage from "@assets/Junk_boat.webp";
import VesselType from "@/components/VesselType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Can I handle the junk boat removal on my own?",
    answer: "You can, but junk boat removal is usually harder than it looks. Boats have hazardous materials, metal parts, electrical systems and fluids that have to be removed and disposed of by the rules. On top of that, fiberglass hulls need to be cut up and shredded with special equipment. Without the right tools, permits and experience, the job can take a long time, cost a lot and be unsafe. That is why many owners hire professionals to make sure everything is done legally and responsibly",
  },
  {
    id: "faq-2",
    question: "What if there are hazardous materials on my boat?",
    answer: "All hazardous materials are handled according to environmental regulations so they are disposed of safely and properly",
  },
  {
    id: "faq-3",
    question: "Do I need a title to get rid of a junk boat?",
    answer: "In Florida, you do not always need a title to remove a junk or abandoned boat. Our team can legally remove boats without a title and takes care of the paperwork and state requirements. That keeps the process quick, safe and hassle-free for you",
  },
  {
    id: "faq-4",
    question: "Which areas do you cover?",
    answer: "We cover the whole state of Florida! Wherever your boat is — from Miami to Jacksonville or Tampa to the Keys — our local crews are ready to provide fast, professional boat removal",
  },
  {
    id: "faq-5",
    question: "Do I have to be there for the boat removal?",
    answer: "You don’t have to be there, but it can help. We can arrange everything ahead of time so the job goes smoothly.",
  },
  {
    id: "faq-6",
    question: "Can Easy Boat Removal get boats out of hard-to-reach places?",
    answer: "Yes. We have the experience and the specialized equipment to safely remove boats from even the most difficult, hard-to-access spots.",
  },
];


export default function JunkBoatRemoval() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://easyboatremoval.com/junk-boat-removal" />
  </Helmet>
  <Header />

     <main className="bg-secondary">
        <section className="relative w-full bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-screen">
  <img
    src={heroImage}
    alt="Junk boat removal job in Florida"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/50" />
</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-[50vh] sm:h-[60vh] md:h-screen pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
        JUNK BOAT REMOVAL, DISMANTLING & DISPOSAL
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Wherever it is — on land, on the water or sunk
        </p>

        </div>
    </section>
<section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl text-orange-600 md:text-4xl font-bold mb-6">
            Easy Junk Boat Removal
          </h2>

          <p className="text-2xl text-gray-700 mb-4">
            We provide fast, legal and eco-friendly junk boat removal all over Florida.
            From damaged and abandoned boats to vessels that are fully underwater, our experienced crew takes care of every
            step, including hauling, disposal and the paperwork.
          </p>

          <p className="text-2xl text-gray-700 ">
            No job is too big or too small, and no location is too difficult. We remove boats from
            private property, marinas, waterways and shorelines — on land, on the water or sunk. Thousands of
            Floridians trust us, and we focus on protecting the environment while leaving your property
            clean, with no hassle.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={junkBoatImage}
            alt="Junk boat removal in Florida"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

        <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            HOW OUR JUNK BOAT REMOVAL WORKS
          </h2>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <PhoneCall className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reach out for a free estimate with no obligation, and pick a time that works for your junk boat removal
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Forklift className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Removal & Dismantling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our experienced crew shows up on time to safely remove the boat, haul it and take it apart with the right equipment
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Recycle className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Disposal & Cleanup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We handle legal disposal, the paperwork and the proper removal of all hazardous materials, so your property is left clean, safe and environmentally compliant
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <VesselType />
    <Gallery />

     <section id="faq" className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
                Answers to common questions about junk boat removal
              </p>
            </div>
    
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-background rounded-md border-primary px-6" data-testid={`accordion-${faq.id}`}>
                  <AccordionTrigger className="text-left hover:no-underline" data-testid={`trigger-${faq.id}`}>
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" data-testid={`content-${faq.id}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

    <Ready />
     </main>
     <Footer />
  </>
  );

}
