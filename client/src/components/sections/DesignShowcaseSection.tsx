import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, Layers, Image } from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureItem({ icon, title, description, delay }: FeatureItemProps) {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-purple flex items-center justify-center">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export function DesignShowcaseSection() {
  const features = [
    {
      icon: <Palette className="text-white text-xl" />,
      title: "Custom Branding",
      description: "Match your card design to your brand colors, logo, and visual identity.",
      delay: 0.1
    },
    {
      icon: <Layers className="text-white text-xl" />,
      title: "Multiple Layouts",
      description: "Choose from professional, creative, or minimalist designs to suit your style.",
      delay: 0.2
    },
    {
      icon: <Image className="text-white text-xl" />,
      title: "Rich Media",
      description: "Include photos, videos, and interactive elements in your digital card.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Design Cards That <br/>Get Remembered</h2>
            <p className="text-xl text-gray-600 mb-8">Make a lasting impression with customizable digital business cards that showcase your brand and personality.</p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description} 
                  delay={feature.delay}
                />
              ))}
            </div>
            
            <div className="mt-10">
              <Button className="gradient-purple text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition duration-300">
                Create Your Card
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] w-full max-w-[400px] mx-auto">
              {/* Card Creation UI Mockup */}
              <div className="absolute top-0 right-0 w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4 flex items-center justify-between border-b">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </a>
                  <h3 className="text-lg font-bold">Create card</h3>
                  <button className="text-purple-600 font-medium">Save</button>
                </div>
                
                <div className="py-3 px-4 flex justify-center space-x-2">
                  <div className="w-8 h-2 rounded-full bg-purple-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium mb-3">Image & Layout</h4>
                  <div className="relative mb-3 rounded-xl overflow-hidden">
                    <div className="gradient-card h-36 rounded-xl relative">
                      <button className="absolute top-2 right-2 bg-white p-1 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <div className="absolute -bottom-6 left-4">
                        <div className="relative w-12 h-12 rounded-full bg-white border-2 border-white">
                          <button className="absolute -bottom-1 -right-1 bg-purple-600 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full border border-gray-300 rounded-lg py-2.5 text-gray-700 font-medium mt-8 hover:bg-gray-50">
                    Change Card Layout
                  </button>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Card color</h4>
                    <div className="flex space-x-2 mb-6">
                      <button className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 ring-2 ring-offset-2 ring-transparent"></button>
                      <button className="w-8 h-8 rounded-full bg-orange-500 ring-2 ring-offset-2 ring-transparent"></button>
                      <button className="w-8 h-8 rounded-full bg-yellow-500 ring-2 ring-offset-2 ring-transparent"></button>
                      <button className="w-8 h-8 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-transparent"></button>
                      <button className="w-8 h-8 rounded-full bg-purple-600 ring-2 ring-offset-2 ring-purple-600"></button>
                      <button className="w-8 h-8 rounded-full bg-teal-500 ring-2 ring-offset-2 ring-transparent"></button>
                      <button className="w-8 h-8 rounded-full bg-blue-600 ring-2 ring-offset-2 ring-transparent"></button>
                    </div>
                    
                    <h4 className="font-medium mb-3">Select type of card</h4>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="card-type" className="hidden" defaultChecked />
                        <div className="w-5 h-5 rounded-full border-2 border-purple-600 flex items-center justify-center mr-2">
                          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        </div>
                        <span>Business</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="card-type" className="hidden" />
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2">
                          <div className="w-3 h-3 rounded-full bg-transparent"></div>
                        </div>
                        <span>Personal</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-10">
                    <button className="w-24 bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
                      <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </button>
                    <button className="w-24 bg-purple-100 text-purple-700 font-medium px-4 py-3 rounded-lg hover:bg-purple-200 transition duration-300">
                      Preview
                    </button>
                    <button className="w-24 gradient-purple text-white font-medium px-4 py-3 rounded-lg hover:shadow-lg transition duration-300">
                      Next
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative card */}
              <div className="absolute top-10 left-0 w-64 h-32 gradient-light rounded-xl transform -rotate-6 shadow-lg"></div>
              <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-100 rounded-full transform opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
