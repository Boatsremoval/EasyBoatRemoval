import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import heroImage from "@assets/Main4.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Ready from "@/components/Ready";
import junkBoatImage from "@assets/Boat_salvage.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Do you work with insurance companies directly?",
    answer: "Yes. We have a lot of experience working with insurance companies and adjusters. Our team arranges the salvage boat removal, supplies the documents and photos they need, helps with the claim and makes sure the whole process meets insurance and legal requirements",
  },
  {
    id: "faq-2",
    question: "Do I need a title for salvage boat removal?",
    answer: "In Florida, a title is not always needed for salvage boat removal. Depending on the situation, the condition and the location of the boat, we can go ahead without a title and take care of the documents so the removal is legal and meets state rules",
  },
  {
    id: "faq-3",
    question: "Can my insurance company pay for the salvage boat removal?",
    answer: "Yes. Often the insurance company can cover the cost of salvage boat removal. We work directly with adjusters, provide the documents they need and arrange billing when possible, so the process is as easy as possible for the owner",
  },
  {
    id: "faq-4",
    question: "Which areas do you cover?",
    answer: "We cover the whole state of Florida! Wherever your boat is — from Miami to Jacksonville or Tampa to the Keys — our local crews are ready to provide fast, professional boat removal",
  },
    {
    id: "faq-5",
    question: "Can Easy Boat Removal get boats out of hard-to-reach places?",
    answer: "Yes. We have the experience and the specialized equipment to safely remove boats from even the most difficult, hard-to-access spots.",
  },
];


export default function SalvageBoatRemoval() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://easyboatremoval.com/salvage-boat-removal" />
  </Helmet>
  <Header />

     <main className="bg-secondary">
        <section className="relative w-full bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-screen">
  <img
    src={heroImage}
    alt="Salvage boat removal job in Florida"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/50" />
</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-[50vh] sm:h-[60vh] md:h-screen pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
        SALVAGE BOAT REMOVAL
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
            Professional Salvage Boat Removal
          </h2>

          <p className="text-2xl text-gray-700 mb-4">
            Salvage boat removal means safely recovering boats that are damaged, disabled, grounded or sunk. 
            Whether the boat was hit by a storm, an accident or a mechanical failure, our experienced crew uses 
            special equipment to lift, secure and remove it with as little impact on the environment as possible.
          </p>

          <p className="text-2xl text-gray-700 ">
            We handle the whole removal, from checking the site to recovery, transport and the needed 
            paperwork. We also work with insurance companies to help with salvage claims and documents. 
            If a recovered boat can’t be salvaged, we can turn the job into a junk boat removal and 
            take care of legal disposal under Florida rules.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={junkBoatImage}
            alt="Salvage boat removal in Florida"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

<section className="py-16 md:py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
          Types of Salvage Boats We Remove
        </h2>

        <p className="text-lg text-muted-foreground mb-6">
          We safely recover and remove many kinds of salvage vessels with special
          equipment and eco-friendly methods
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Sunken boats</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Grounded vessels</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Storm-damaged boats</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Accident-damaged vessels</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Flooded or disabled boats</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Abandoned salvage boats</span>
          </div>
        </div>
      </div>

    </div>
  </div>
  
</section>

    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Insurance Claim Support
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Salvage boat removal usually comes with insurance claims, inspections and
            paperwork. We work directly with insurance companies to make the
            process simpler and keep the removal safe and compliant.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Work directly with insurance adjusters
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Supply photos and detailed salvage documents
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Help with salvage and total-loss claims
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Move vessels to secure storage for inspection
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Meet insurance and Florida requirements
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Take care of communication so things keep moving
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Gallery />

     <section id="faq" className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
                Answers to common questions about salvage boat removal
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