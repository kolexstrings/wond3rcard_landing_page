import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroImage from "@assets/hero-image.png";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Revolutionize Your {""}
              <br className="hidden sm:block" />
              Identity {""}
              <span className="text-purple-600">
                <br className="hidden sm:block" />
                Management
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience seamless, secure, and smart digital identity solutions
              with Wond3rCard's NFC-enabled technology.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="gradient-purple text-white font-medium shadow-lg hover:shadow-xl transition duration-300 rounded-full"
                onClick={() => {
                  window.location.href =
                    "https://wond3rcard-frontend.vercel.app/#/signUp";
                }}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-purple-700 border-purple-200 font-medium hover:bg-purple-50 transition duration-300 rounded-full"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Wond3rCard mobile app"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl hidden sm:block"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl hidden sm:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
