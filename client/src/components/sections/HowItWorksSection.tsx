import { motion } from "framer-motion";
import { Lightbulb, Megaphone, PieChart } from "lucide-react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  tipIcon: React.ReactNode;
  tipText: string;
  index: number;
}

function StepCard({ stepNumber, title, description, tipIcon, tipText, index }: StepCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 gradient-light rounded-bl-[100px] opacity-50"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">{stepNumber}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <div className="mt-6 bg-purple-50 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
              {tipIcon}
            </div>
            <p className="ml-3 text-sm text-gray-700">{tipText}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Create Your Card",
      description: "Choose a template, add your information, and customize the design to match your brand or personal style.",
      tipIcon: <Lightbulb className="text-white" />,
      tipText: "You can create multiple cards for different purposes - personal, business, events, etc."
    },
    {
      stepNumber: 2,
      title: "Share With Anyone",
      description: "Use the QR code, NFC tap, or direct link to instantly share your digital card with anyone you meet.",
      tipIcon: <Megaphone className="text-white" />,
      tipText: "Recipients don't need the Wond3rCard app to view your digital card - it works in any browser."
    },
    {
      stepNumber: 3,
      title: "Track & Update",
      description: "Monitor views and engagement, then update your card anytime. Changes appear instantly for all recipients.",
      tipIcon: <PieChart className="text-white" />,
      tipText: "Analytics show you who viewed your card, when, and which links they clicked on."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How Wond3rCard Works</h2>
          <p className="text-xl text-gray-600">Replace paper business cards with a modern digital solution in just three easy steps.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              stepNumber={step.stepNumber} 
              title={step.title} 
              description={step.description} 
              tipIcon={step.tipIcon} 
              tipText={step.tipText} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
