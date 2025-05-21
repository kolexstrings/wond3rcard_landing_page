import { motion } from "framer-motion";
import { 
  Palette, 
  Share, 
  RefreshCcw, 
  Link2, 
  BarChart2, 
  Globe 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="w-14 h-14 gradient-purple rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-purple-600 font-medium flex items-center">
        Learn more 
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Palette className="text-white text-2xl" />,
      title: "Customizable Cards",
      description: "Create visually stunning cards that match your brand with our easy-to-use editor. Choose colors, layouts, and more."
    },
    {
      icon: <Share className="text-white text-2xl" />,
      title: "Share Instantly",
      description: "Share your digital card via QR code, email, text message, or social media in just a few taps."
    },
    {
      icon: <RefreshCcw className="text-white text-2xl" />,
      title: "Always Updated",
      description: "Update your contact details or social links anytime. Recipients always see your latest information."
    },
    {
      icon: <Link2 className="text-white text-2xl" />,
      title: "Social Integration",
      description: "Connect all your social profiles and online presence in one place. Let people follow you where they prefer."
    },
    {
      icon: <BarChart2 className="text-white text-2xl" />,
      title: "Analytics",
      description: "Track when your card is viewed, which links are clicked, and understand how people interact with your profile."
    },
    {
      icon: <Globe className="text-white text-2xl" />,
      title: "Multi-Profile Support",
      description: "Create separate personal and business profiles. Share the right one for the right context."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Create, Share, Connect - All Digital</h2>
          <p className="text-xl text-gray-600">Everything you need to replace traditional business cards with a modern digital solution.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
