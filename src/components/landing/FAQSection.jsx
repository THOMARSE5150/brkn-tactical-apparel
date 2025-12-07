import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Orders are produced on-demand by Tapstitch. Production takes 3-5 business days, followed by shipping which varies by location: AU/NZ 5-10 days, EU 7-12 days, US/CA 10-15 days, Rest of World 10-20 days."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the made-to-order nature of our products, we cannot accept returns unless the item is defective or damaged. If you receive a faulty product, contact us within 14 days with photos and we'll arrange a replacement."
  },
  {
    question: "How long does production take?",
    answer: "Each hoodie is produced on-demand to minimize waste. Production typically takes 3-5 business days before shipping. You'll receive tracking information once your order ships."
  },
  {
    question: "How should I care for my hoodie?",
    answer: "Machine wash cold with like colors. Turn inside out before washing. Do not bleach. Tumble dry low or hang dry. Do not iron directly on print. Following these instructions will ensure your hoodie maintains its quality."
  },
  {
    question: "What material is the hoodie made from?",
    answer: "The OPS/01 is made from 400gsm heavyweight fleece with a brushed interior for maximum warmth. 80% cotton, 20% polyester blend for durability and comfort."
  },
  {
    question: "Is this an oversized fit?",
    answer: "Yes, the OPS/01 features an intentionally oversized, police-cut silhouette. If you prefer a more standard fit, we recommend sizing down one size from your usual."
  }
];

export default function FAQSection() {
  return (
    <section className="bg-[#111] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-[#6C7A6F] text-xs font-mono tracking-widest mb-4 block">
            INTEL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-6 data-[state=open]:border-[#6C7A6F]/30 transition-colors"
              >
                <AccordionTrigger className="py-5 text-left text-white hover:text-[#6C7A6F] hover:no-underline transition-colors font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[#9A9A9A] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6A6A6A] text-sm">
            Still have questions?{' '}
            <a href="#contact" className="text-[#6C7A6F] hover:text-white transition-colors">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}