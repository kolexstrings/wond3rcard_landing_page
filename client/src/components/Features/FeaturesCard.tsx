import { motion } from "framer-motion";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({
  image,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-contain rounded-xl shadow-lg"
      />
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </motion.div>
  );
}
