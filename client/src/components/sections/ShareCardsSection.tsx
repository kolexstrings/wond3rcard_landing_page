import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QrCode, Wifi, Link } from "lucide-react";

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

export function ShareCardsSection() {
  const features = [
    {
      icon: <QrCode className="text-white text-xl" />,
      title: "QR Code Sharing",
      description:
        "Let people scan your unique QR code to instantly view your digital card.",
      delay: 0.1,
    },
    {
      icon: <Wifi className="text-white text-xl" />,
      title: "NFC Technology",
      description:
        "Tap your phone to another device to share your card wirelessly.",
      delay: 0.2,
    },
    {
      icon: <Link className="text-white text-xl" />,
      title: "Direct Link Sharing",
      description:
        "Share your personal card link via email, text, or social media platforms.",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row">
          <motion.div
            className="md:w-1/2 relative mt-10 md:mt-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] w-full max-w-[400px] mx-auto">
              {/* Share Card UI Mockup */}
              <div className="absolute top-0 left-0 w-full max-w-sm bg-gradient-to-b from-purple-100 to-blue-50 rounded-3xl shadow-xl overflow-hidden p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Share</h3>
                  <button className="absolute top-6 right-6 bg-white w-8 h-8 flex items-center justify-center rounded-lg">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2">
                    {/* Profile photo placeholder */}
                    <div className="w-full h-full bg-gray-200">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg flex items-center justify-center">
                    Anna sharma
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </h4>
                  <p className="text-gray-500 text-sm">Digital Resume</p>

                  <div className="my-6 border-4 border-purple-600 rounded-lg p-2 relative">
                    <div className="bg-black rounded w-full h-32 flex items-center justify-center">
                      {/* QR code placeholder */}
                      <div className="w-24 h-24 bg-white rounded"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 border-2 border-purple-600 rounded"></div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="gradient-purple text-white font-medium w-full py-3 mb-6"
                  >
                    Preview Card
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-gray-100 border-0 text-gray-700 font-medium py-3 px-2 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      Copy link
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-gray-100 border-0 text-gray-700 font-medium py-3 px-2 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      Share link
                    </Button>
                  </div>
                </div>

                {/* <div className="fixed bottom-0 left-0 w-full bg-white border-t py-3 px-6">
                  <div className="flex justify-between">
                    <a href="#" className="text-center w-12">
                      <svg className="w-5 h-5 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="block text-xs mt-1">Home</span>
                    </a>
                    <a href="#" className="text-center w-12">
                      <svg className="w-5 h-5 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      <span className="block text-xs mt-1">Cards</span>
                    </a>
                    <a href="#" className="text-center w-12">
                      <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center mx-auto -mt-6">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="text-center w-12">
                      <svg className="w-5 h-5 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="block text-xs mt-1">Analytics</span>
                    </a>
                    <a href="#" className="text-center w-12">
                      <svg className="w-5 h-5 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="block text-xs mt-1">Connections</span>
                    </a>
                  </div>
                </div> */}
              </div>

              {/* Social profile popup */}
              <div className="absolute top-40 right-0 w-64 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">Activate all</h4>
                  <div className="w-12 h-6 bg-purple-600 rounded-full relative p-1">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <span>Instagram</span>
                    </div>
                    <div className="w-12 h-6 bg-purple-600 rounded-full relative p-1">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-4.2 13.5h-1.7v-4.7h-1.9v-1.7h1.9V8.7c0-1.3.6-2.2 2.2-2.2h1.7v1.7h-1.1c-.4 0-.5.2-.5.6v1.6h1.7l-.2 1.7h-1.5v4.7z" />
                        </svg>
                      </div>
                      <span>Qoura</span>
                    </div>
                    <div className="w-12 h-6 bg-purple-600 rounded-full relative p-1">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 017.022 2.91 9.788 9.788 0 012.896 6.994c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                        </svg>
                      </div>
                      <span>Instagram</span>
                    </div>
                    <div className="w-12 h-6 bg-purple-600 rounded-full relative p-1">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Share Your Card <br />
              Anywhere, Anytime
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Multiple sharing options make it easy to connect with anyone, even
              if they don't have the app.
            </p>

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
              <Button
                className="gradient-purple text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => {
                  window.location.href =
                    "https://app.wond3rcard.com/#/minified:a3r";
                }}
              >
                Start Sharing Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
