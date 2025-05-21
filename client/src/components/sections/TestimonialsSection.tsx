import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  index: number;
}

function TestimonialCard({ name, role, testimonial, rating, index }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="absolute top-6 right-6 text-4xl text-purple-200">"</div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4 relative z-10">{testimonial}</p>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`${i < Math.floor(rating) ? 'fill-current' : i < rating ? 'fill-current opacity-50' : ''}`} 
            size={18} 
          />
        ))}
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      testimonial: "Wond3rCard has completely transformed how I network. No more running out of business cards at events, and I love being able to update my information instantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      testimonial: "The analytics feature is a game-changer. I can see who's viewed my card and which links they clicked, helping me follow up more effectively with potential clients.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Sales Executive",
      testimonial: "As someone who attends multiple conferences, having different cards for different events is incredible. The customization options let me tailor my profile to each audience.",
      rating: 4.5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Join thousands of satisfied professionals who've gone digital with Wond3rCard.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
