import { motion } from "framer-motion";
import { formatNumber } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

function StatItem({ value, label, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="font-bold text-4xl text-purple-700 mb-2">{value}</div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { value: "10K+", label: "Active Users", delay: 0 },
    { value: "50K+", label: "Cards Created", delay: 0.1 },
    { value: "100+", label: "Countries", delay: 0.2 },
    { value: "4.9/5", label: "User Rating", delay: 0.3 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              delay={stat.delay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
