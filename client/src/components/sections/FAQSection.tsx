import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem value={value} className="mb-6 border-none">
      <AccordionTrigger className="flex justify-between items-center w-full text-left bg-white p-6 rounded-xl shadow-md hover:no-underline">
        <h3 className="text-lg font-bold">{question}</h3>
      </AccordionTrigger>
      <AccordionContent className="bg-white px-6 pb-6 rounded-b-xl shadow-md mt-[-1px]">
        <p className="text-gray-600 pt-2">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}

export function FAQSection() {
  const faqs: FAQItemProps[] = [
    {
      value: "faq-1",
      question: "How does Wond3rCard work?",
      answer: "Wond3rCard lets you create digital business cards that you can share via QR code, NFC, or direct link. Recipients can view your card on any device without downloading an app. You can customize your card, include contact information, social links, and more."
    },
    {
      value: "faq-2",
      question: "Do recipients need to have the app?",
      answer: "No! That's the beauty of Wond3rCard. Anyone can view your digital card using a standard web browser on their phone, tablet, or computer. No downloads required for recipients."
    },
    {
      value: "faq-3",
      question: "Can I update my card after sharing it?",
      answer: "Absolutely! One of the main benefits of Wond3rCard is that you can update your information anytime, and the changes will automatically appear for anyone who views your card - even if they saved it weeks or months ago."
    },
    {
      value: "faq-4",
      question: "What kind of analytics do you provide?",
      answer: "Our analytics track when your card is viewed, which links are clicked, and how many times it's been shared. Business and Pro plans include more detailed analytics like geographic location of viewers, device types, and time spent viewing your card."
    },
    {
      value: "faq-5",
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All data is encrypted both in transit and at rest. You control what information you share on your card, and you can make certain details private or only visible to specific contacts."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  value={faq.value}
                />
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
