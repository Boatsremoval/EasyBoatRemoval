import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Can I remove and dispose of the boat on my own?",
    answer: "Doing a boat removal yourself is difficult and uncommon. Professionals have the experience and equipment to make the job safe and efficient.",
  },
  {
    id: "faq-2",
    question: "Is your boat disposal eco-friendly?",
    answer: "Yes. We focus on environmentally responsible disposal, which includes recycling materials and safely handling any hazardous parts.",
  },
  {
    id: "faq-3",
    question: "What paperwork is needed to remove a boat?",
    answer: "You will need the title and registration for the boat. Sailboats and boats over 38 feet also need their Coast Guard registration.",
  },
  {
    id: "faq-4",
    question: "What if there are hazardous materials on the boat?",
    answer: "All hazardous materials are handled according to environmental regulations so they are disposed of safely and properly.",
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

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Answers to common questions about our boat removal service
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
  );
}
