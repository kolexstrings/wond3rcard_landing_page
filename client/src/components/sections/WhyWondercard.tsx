import { motion } from "framer-motion";
import { ShieldCheck, Send, Settings2 } from "lucide-react";

export function WhyWonderCardSection() {
  const reasons = [
    {
      icon: <ShieldCheck size={48} className="text-purple-600 mb-5" />,
      title: "Card Insights",
      description:
        "Track who viewed or engaged with your digital card in real time.",
    },
    {
      icon: <Send size={48} className="text-purple-600 mb-5" />,
      title: "Live Updates",
      description:
        "Instantly update your card details—no need to reprint or resend.",
    },
    {
      icon: <Settings2 size={48} className="text-purple-600 mb-5" />,
      title: "Effortless Sharing",
      description:
        "Share your card via QR, link, or NFC with a single tap—anywhere.",
    },
  ];

  return (
    <section id="why-wondercard" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Why Wond3ercard?</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600">
            Your digital identity deserves more than just a name. Here’s what
            sets WonderCard apart from ordinary card platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {reason.icon}
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-lg">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
