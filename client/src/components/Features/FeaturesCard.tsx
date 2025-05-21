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
      className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 p-6 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <img
        src={image}
        alt={title}
        className="w-64 h-64 object-contain rounded-xl"
      />
      <div className="text-center md:text-left max-w-xl">
        <h3 className="text-4xl font-extrabold mb-4">{title}</h3>
        <p className="text-gray-700 text-xl leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
