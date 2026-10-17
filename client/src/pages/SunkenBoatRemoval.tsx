import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Biohazard,  HandCoins, Ship } from "lucide-react";
import heroImage from "@assets/Main3.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ready from "@/components/Ready";
import SunkenBoatImage from "@assets/Sunk_boat.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "How deep can a sunken boat be for you to remove it?",
    answer: "We can safely raise sunken boats from shallow water and from depths of up to 100 feet. With special equipment like cranes, winches and flotation bags, we keep the recovery safe, efficient and environmentally compliant",
  },
  {
    id: "faq-2",
    question: "Will my insurance pay for sunken boat removal?",
    answer: "Often, yes. Insurance companies can cover the cost of sunken boat removal in many cases. We work directly with adjusters, provide the documents and photos they need and coordinate the process so your claim goes as smoothly as possible",
  },
  {
    id: "faq-3",
    question: "Do you handle hazardous materials safely when removing a sunken boat?",
    answer: "Yes. We carefully handle all hazardous materials such as fuel, batteries, oil and chemicals. We use floating containment booms to stop any spills and make sure removal and disposal are safe and fully meet environmental regulations",
  },
  {
    id: "faq-4",
    question: "Which areas do you cover?",
    answer: "We cover the whole state of Florida! Wherever your boat is — from Miami to Jacksonville or Tampa to the Keys — our local crews are ready to provide fast, professional boat removal",
  }
];


export default function SunkenBoatRemoval() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://easyboatremoval.com/sunken-boat-removal" />
  </Helmet>
  <Header />

     <main className="bg-secondary">
        <section className="relative w-full bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-screen">
  <img
    src={heroImage}
    alt="Sunken boat removal job in Florida"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/50" />
</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-[50vh] sm:h-[60vh] md:h-screen pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
        SUNKEN BOAT REMOVAL
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Sunken boat removal made easy — no stress, no mess. 24/7 emergency service
        </p>

        </div>
    </section>
<section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl text-orange-600 md:text-4xl font-bold mb-6">
            Professional Sunken Boat Removal
          </h2>

          <p className="text-2xl text-gray-700 mb-4">
            Our specialty is removing sunken boats quickly and safely all over Florida. With 
  special equipment and professional methods, we recover vessels from waterways, 
  shorelines or private property and take care of transport, disposal and all the paperwork.
          </p>

          <p className="text-2xl text-gray-700 mb-4 ">
            A sunken boat is often a safety hazard, can hold hazardous materials and may damage nearby property or waterways if it isn’t handled the right way. Our crew uses cranes, winches, flotation bags and other special tools to safely lift, move and remove boats that are underwater
          </p>
          <p className="text-2xl text-gray-700 ">
          We know how important it is to act fast, so we offer 24/7 emergency sunken boat removal.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={SunkenBoatImage}
            alt="Sunken boat removal in Florida"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

        <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            DON’T WAIT!
          </h2>
          <p className="text-muted-foreground">
                If your boat has sunk, it is important to act right away
              </p>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Biohazard className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle>Environmental Hazards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The shorter the time a boat stays underwater, the lower the risk to the environment
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Ship className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Chance of Repair</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The sooner a boat comes up, the better the chance it can be saved
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <HandCoins className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Fines & Penalties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Moving quickly lowers the risk of fines and penalties
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
       
       <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            HOW SUNKEN BOAT REMOVAL WORKS
          </h2>
           
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Don't wait — contact us right away
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <CardTitle>Initial Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We check the condition and location of the sunken boat and any hazards, including environmental risks and legal requirements
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <CardTitle>Scheduling & Emergency Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                 We book the removal as early as possible. For urgent jobs we offer 24/7 emergency service to limit environmental damage and the risk of fines
              </p>
            </CardContent>
          </Card>
        
        {/* Step 4 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <CardTitle>Equipment Setup & Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                 Our crew brings everything needed, including cranes, winches, flotation bags and other special tools. We secure the site and keep the crew, the public and the environment safe
              </p>
            </CardContent>
          </Card>
   
      {/* Step 5 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <CardTitle>Disposal & Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                 We take care of legal disposal, recycle materials and complete the paperwork. When needed, we help with insurance claims so everything is smooth and compliant
              </p>
            </CardContent>
          </Card>
    
      </div>
   </div>

    </section>
    

     <section id="faq" className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
                Answers to common questions about sunken boat removal
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