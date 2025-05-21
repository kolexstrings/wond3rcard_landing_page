import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-800 opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Go Digital?</h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of professionals who've already switched to Wond3rCard. Your first digital card is free.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-700 hover:bg-gray-100 font-medium shadow-lg"
            >
              Create Your Free Card
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-purple-700 text-white border border-purple-400 hover:bg-purple-800 font-medium"
            >
              View Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-2" size={20} />
              <span className="text-white">No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-2" size={20} />
              <span className="text-white">Set up in minutes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
