import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Users, Wifi, Calendar, PanelRight } from "lucide-react";

function FeatureItem({ icon, title, description, delay }: FeatureItemProps) {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, x: 20 }}
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

// NFC Card Animation Component
const NfcAnimation = () => {
  return (
    <div className="relative w-full h-64">
      {/* Card 1 - Main Card */}
      <motion.div
        className="absolute left-4 top-8 w-72 h-44 rounded-xl bg-gray-900 shadow-xl overflow-hidden"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Purple/Blue geometric pattern */}
        <div className="absolute inset-0 opacity-70">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7B61FF" />
                <stop offset="100%" stopColor="#FF61DC" />
              </linearGradient>
            </defs>
            <g fill="url(#grad1)">
              <polygon
                points="0,0 30,40 10,70 40,50 60,80 20,100 50,120 80,90 100,120 140,80 160,110 190,80 220,110 250,70 280,100 300,60 300,180 0,180"
                fillOpacity="0.3"
              />
              <polygon
                points="30,0 60,30 80,10 110,40 140,20 170,50 200,20 230,50 260,30 300,60 300,0"
                fillOpacity="0.3"
              />
              <circle cx="260" cy="30" r="15" fillOpacity="0.4" />
              <circle cx="210" cy="70" r="10" fillOpacity="0.4" />
              <circle cx="80" cy="50" r="12" fillOpacity="0.4" />
              <polygon points="120,40 150,20 170,40 150,60" fillOpacity="0.5" />
              <polygon points="50,90 70,70 90,90 70,110" fillOpacity="0.5" />
              <polygon
                points="200,90 220,70 240,90 220,110"
                fillOpacity="0.5"
              />
            </g>
          </svg>
        </div>

        {/* NFC Symbol */}
        <div className="absolute top-4 right-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M8.5 16.5C7.83696 15.9022 7.29429 15.2019 6.90524 14.4253C6.51618 13.6487 6.28669 12.8102 6.23 11.95M15.5 7.5C16.163 8.09777 16.7057 8.79815 17.0948 9.57466C17.4838 10.3512 17.7133 11.1898 17.77 12.05M9.5 9.5C10.0374 8.9626 10.7374 8.5989 11.5 8.5C12.2626 8.5989 12.9626 8.9626 13.5 9.5C14.0374 10.0374 14.4011 10.7374 14.5 11.5C14.4011 12.2626 14.0374 12.9626 13.5 13.5C12.9626 14.0374 12.2626 14.4011 11.5 14.5C10.7374 14.4011 10.0374 14.0374 9.5 13.5C8.9626 12.9626 8.5989 12.2626 8.5 11.5C8.5989 10.7374 8.9626 10.0374 9.5 9.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Card Content */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold">John Doe</h3>
          <p className="text-sm opacity-80">Digital Marketing Consultant</p>
        </div>
      </motion.div>

      {/* Card 2 - Back side with QR */}
      <motion.div
        className="absolute right-4 top-16 w-72 h-44 rounded-xl bg-gray-900 shadow-xl overflow-hidden"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Purple/Blue geometric pattern */}
        <div className="absolute inset-0 opacity-70">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7B61FF" />
                <stop offset="100%" stopColor="#FF61DC" />
              </linearGradient>
            </defs>
            <g fill="url(#grad2)">
              <polygon
                points="0,0 30,40 10,70 40,50 60,80 20,100 50,120 80,90 100,120 140,80 160,110 190,80 220,110 250,70 280,100 300,60 300,180 0,180"
                fillOpacity="0.3"
              />
              <polygon
                points="30,0 60,30 80,10 110,40 140,20 170,50 200,20 230,50 260,30 300,60 300,0"
                fillOpacity="0.3"
              />
              <circle cx="260" cy="30" r="15" fillOpacity="0.4" />
              <circle cx="210" cy="70" r="10" fillOpacity="0.4" />
              <circle cx="80" cy="50" r="12" fillOpacity="0.4" />
              <polygon points="120,40 150,20 170,40 150,60" fillOpacity="0.5" />
              <polygon points="50,90 70,70 90,90 70,110" fillOpacity="0.5" />
              <polygon
                points="200,90 220,70 240,90 220,110"
                fillOpacity="0.5"
              />
            </g>
          </svg>
        </div>

        {/* QR Code */}
        <div className="absolute right-6 top-6 w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect x="10" y="10" width="20" height="20" fill="black" />
            <rect x="10" y="35" width="5" height="5" fill="black" />
            <rect x="20" y="35" width="10" height="5" fill="black" />
            <rect x="10" y="45" width="20" height="5" fill="black" />
            <rect x="10" y="55" width="5" height="15" fill="black" />
            <rect x="20" y="55" width="10" height="5" fill="black" />
            <rect x="25" y="65" width="5" height="5" fill="black" />
            <rect x="10" y="75" width="20" height="15" fill="black" />

            <rect x="35" y="10" width="10" height="5" fill="black" />
            <rect x="50" y="10" width="5" height="5" fill="black" />
            <rect x="60" y="10" width="5" height="5" fill="black" />
            <rect x="70" y="10" width="20" height="20" fill="black" />

            <rect x="35" y="20" width="5" height="20" fill="black" />
            <rect x="45" y="20" width="5" height="5" fill="black" />
            <rect x="55" y="20" width="10" height="10" fill="black" />

            <rect x="35" y="45" width="5" height="5" fill="black" />
            <rect x="45" y="45" width="10" height="5" fill="black" />
            <rect x="60" y="45" width="5" height="5" fill="black" />
            <rect x="70" y="45" width="5" height="5" fill="black" />
            <rect x="80" y="45" width="10" height="5" fill="black" />

            <rect x="35" y="55" width="5" height="5" fill="black" />
            <rect x="45" y="55" width="5" height="5" fill="black" />
            <rect x="55" y="55" width="5" height="5" fill="black" />
            <rect x="70" y="55" width="10" height="5" fill="black" />
            <rect x="85" y="55" width="5" height="5" fill="black" />

            <rect x="35" y="65" width="15" height="5" fill="black" />
            <rect x="55" y="65" width="5" height="5" fill="black" />
            <rect x="70" y="65" width="5" height="5" fill="black" />
            <rect x="80" y="65" width="5" height="5" fill="black" />

            <rect x="35" y="75" width="5" height="5" fill="black" />
            <rect x="45" y="75" width="10" height="5" fill="black" />
            <rect x="60" y="75" width="5" height="5" fill="black" />
            <rect x="70" y="75" width="20" height="15" fill="black" />

            <rect x="35" y="85" width="5" height="5" fill="black" />
            <rect x="45" y="85" width="5" height="5" fill="black" />
            <rect x="55" y="85" width="10" height="5" fill="black" />
          </svg>
        </div>
      </motion.div>

      {/* NFC Animation Waves */}
      <motion.div
        className="absolute left-32 top-24 w-16 h-16 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <motion.div
          className="absolute w-16 h-16 rounded-full border-2 border-purple-500 opacity-50"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.7, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full border-2 border-purple-500 opacity-70"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.8, 0.6, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full border-2 border-purple-500 opacity-90"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.9, 0.7, 0],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>

      {/* Phone Animation */}
      <motion.div
        className="absolute right-32 top-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 40, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="w-16 h-32 bg-gray-800 rounded-xl relative overflow-hidden border-2 border-gray-700">
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-700 rounded-full" />
          <div className="absolute top-6 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-900 to-purple-900 p-1">
            <div className="bg-white rounded-lg h-full w-full p-1 flex flex-col items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 mb-1" />
              <div className="w-10 h-1 bg-gray-300 rounded-full mb-1" />
              <div className="w-8 h-1 bg-gray-300 rounded-full mb-2" />
              <div className="w-12 h-2 bg-purple-500 rounded-full" />
              <div className="text-xs text-purple-600 font-bold mt-1">
                Saved!
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Component
export default function NfcCardsSection() {
  const [activeTab, setActiveTab] = useState("tap");

  const features = [
    {
      id: "tap",
      icon: <Smartphone className="text-purple-600" />,
      title: "Tap to Share",
      description:
        "Simply tap your card to any NFC-enabled smartphone to instantly share your details",
    },
    {
      id: "events",
      icon: <Calendar className="text-purple-600" />,
      title: "Perfect for Events",
      description: "Ideal for conferences, meetings, and networking events",
    },
    {
      id: "connect",
      icon: <Users className="text-purple-600" />,
      title: "Connect Easily",
      description:
        "No app needed for recipients - works with most modern smartphones",
    },
    {
      id: "profiles",
      icon: <PanelRight className="text-purple-600" />,
      title: "Multiple Profiles",
      description:
        "Switch between business and personal profiles with a tap in the app",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              NFC-Enabled <br />
              Smart Cards
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Utilize Near Field Communication for quick, contactless contact
              sharing during networking events such as meetings, workshops, and
              conferences—eliminating the hassle of manually saving contacts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    activeTab === feature.id
                      ? "bg-white shadow-lg"
                      : "hover:bg-white hover:shadow-md"
                  }`}
                  onClick={() => setActiveTab(feature.id)}
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-2 rounded-lg hover:shadow-lg transition duration-300"
            >
              Get Your NFC Card
            </Button>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full -z-10" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full -z-10" />

              <h3 className="text-2xl font-bold mb-6">How NFC Cards Work</h3>

              <NfcAnimation />

              <div className="flex items-center mt-6 border-t pt-6">
                <Wifi className="text-purple-600 mr-4" size={24} />
                <p className="text-gray-600">
                  <span className="font-medium">No batteries required.</span>{" "}
                  NFC cards use power from the reading device to transmit your
                  information securely.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
