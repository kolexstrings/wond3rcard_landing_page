import { motion } from "framer-motion";
import customCard from "@assets/custom-card-design.png";
import nfcCard from "@assets/nfc-card.png";
import digitalIdentity from "@assets/digital-identity-mngt.png";
import mobileApp from "@assets/mobile-app.png";
import { FeatureCard } from "../Features/FeaturesCard";

export function FeaturesSection() {
  const features = [
    {
      image: nfcCard,
      title: "NFC-Enabled Smart Cards",
      description:
        "Utilize Near Field Communication for quick, contactless contact sharing during networking events such as meetings, workshops, and conferences—eliminating the hassle of manually saving contacts.",
    },
    {
      image: digitalIdentity,
      title: "Digital Identity Management",
      description:
        "Streamline the creation and management of digital identities, reducing administrative burdens associated with traditional ID card management.",
    },
    {
      image: customCard,
      title: "Custom Card Design",
      description:
        "Cards can be tailored to include your personal/business branding and specific role-based access features.",
    },
    {
      image: mobileApp,
      title: "Mobile App",
      description:
        "Companion application for real-time updates and enhanced networking capabilities.",
    },
  ];

  return (
    <section id="features" className="py-1 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Features</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Discover how Wond3rCard transforms identity management with
            cutting-edge features designed for today's digital landscape.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}
