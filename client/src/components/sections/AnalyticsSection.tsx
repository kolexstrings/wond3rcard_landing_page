import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, MousePointer, PieChart } from "lucide-react";

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

export function AnalyticsSection() {
  const features = [
    {
      icon: <Eye className="text-white text-xl" />,
      title: "View Tracking",
      description:
        "See when and how often your card is viewed to measure your networking success.",
      delay: 0.1,
    },
    {
      icon: <MousePointer className="text-white text-xl" />,
      title: "Click Analysis",
      description:
        "Track which links visitors click on most to understand what interests them.",
      delay: 0.2,
    },
    {
      icon: <PieChart className="text-white text-xl" />,
      title: "Performance Reports",
      description:
        "Get detailed insights and export reports to measure your networking ROI.",
      delay: 0.3,
    },
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Powerful Analytics <br />
              For Your Connections
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Track engagement, measure impact, and understand how people
              interact with your digital card.
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
              <Button className="gradient-purple text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition duration-300">
                Explore Analytics
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Analytics Dashboard Mockup */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-white p-4">
                  <div className="flex items-center mb-4">
                    <div className="gradient-purple h-8 w-8 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-white font-bold">W3</span>
                    </div>
                    <span className="text-xl font-bold">Wond3rCard</span>
                    <div className="ml-auto text-sm font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-lg">
                      Dashboard
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <span className="text-purple-500 mr-1">$</span>
                            Total Revenue
                          </div>
                          <div className="text-sm text-gray-400">
                            This Month
                          </div>
                          <div className="text-xl font-bold mt-1">80.2k</div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <svg
                              className="w-4 h-4 text-purple-500 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                            Total Users
                          </div>
                          <div className="text-sm text-gray-400">
                            From all tiers
                          </div>
                          <div className="text-xl font-bold mt-1">210.5k</div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <svg
                              className="w-4 h-4 text-purple-500 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                              />
                            </svg>
                            Total Cards
                          </div>
                          <div className="text-sm text-gray-400">
                            From all tiers
                          </div>
                          <div className="text-xl font-bold mt-1">210.5k</div>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">Revenue Growth</h3>
                      <div className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        This Month
                      </div>
                    </div>

                    <div className="h-40 relative">
                      {/* Revenue chart mockup */}
                      <div className="absolute inset-0 flex items-end">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1/30 ${
                              i === 10 ? "bg-purple-700" : "bg-purple-200"
                            } mx-0.5`}
                            style={{
                              height: `${Math.max(
                                10,
                                Math.min(90, Math.random() * 100)
                              )}%`,
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Chart overlay line */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,120 C20,100 40,60 60,80 C80,100 100,60 120,30 C140,10 160,40 180,60 C200,80 220,30 240,50 C260,70 280,90 300,70"
                          stroke="#6C5CE7"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="flex flex-wrap">
                      <div className="w-2/3 pr-4">
                        <div className="flex items-center mb-2">
                          <div className="bg-gray-300 w-6 h-6 rounded mr-2"></div>
                          <span className="text-xs font-medium">
                            Users List (1,345)
                          </span>
                        </div>

                        <div className="flex space-x-2 mb-3">
                          <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                            All
                          </button>
                          <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                            Basic
                          </button>
                          <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                            Business
                          </button>
                          <button className="px-2 py-1 text-xs rounded bg-purple-600 text-white">
                            Premium Users
                          </button>
                        </div>

                        <div className="text-xs text-gray-400 mb-2">
                          3rd January, 2023
                        </div>

                        {/* Table mockup - simplified for the mockup */}
                        <div className="text-xs text-gray-500 grid grid-cols-6 gap-2 mb-2">
                          <div>Profile</div>
                          <div>Name</div>
                          <div>Email</div>
                          <div>Role</div>
                          <div>Subscription</div>
                          <div>Status</div>
                        </div>

                        <div className="bg-white rounded border border-gray-100 p-2 mb-2">
                          <div className="flex items-center text-sm">
                            <div className="w-6 h-6 bg-gray-200 rounded-full mr-2"></div>
                            <div className="text-xs">John Doe</div>
                          </div>
                        </div>

                        <div className="bg-white rounded border border-gray-100 p-2 mb-2">
                          <div className="flex items-center text-sm">
                            <div className="w-6 h-6 bg-gray-200 rounded-full mr-2"></div>
                            <div className="text-xs">John Doe</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-1/3">
                        <div className="mb-2">
                          <div className="text-sm font-medium mb-1">
                            Device Insight
                          </div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Mobile</span>
                            <span>96.42%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                            <div
                              className="bg-purple-600 h-1.5 rounded-full"
                              style={{ width: "96%" }}
                            ></div>
                          </div>

                          <div className="flex justify-between text-xs mb-1">
                            <span>Desktop</span>
                            <span>2.76%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                            <div
                              className="bg-purple-600 h-1.5 rounded-full"
                              style={{ width: "3%" }}
                            ></div>
                          </div>

                          <div className="flex justify-between text-xs mb-1">
                            <span>Tablet</span>
                            <span>0.82%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                            <div
                              className="bg-purple-600 h-1.5 rounded-full"
                              style={{ width: "1%" }}
                            ></div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="text-sm font-medium mb-1">
                            Subscription Trends
                          </div>

                          <div className="flex justify-between text-xs mb-1">
                            <span>Basic</span>
                            <span>200.7k</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                            <div
                              className="bg-purple-400 h-1.5 rounded-full"
                              style={{ width: "70%" }}
                            ></div>
                          </div>

                          <div className="flex justify-between text-xs mb-1">
                            <span>Premium</span>
                            <span>200.3k</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                            <div
                              className="bg-purple-600 h-1.5 rounded-full"
                              style={{ width: "65%" }}
                            ></div>
                          </div>

                          <div className="flex justify-between text-xs mb-1">
                            <span>Business</span>
                            <span>200.1k</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                            <div
                              className="bg-purple-300 h-1.5 rounded-full"
                              style={{ width: "50%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating statistics cards */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white rounded-lg shadow-lg p-4 w-48 transform rotate-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-1">
                  <svg
                    className="w-5 h-5 text-purple-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Total Users</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">From all tiers</div>
                <div className="text-2xl font-bold">210.5k</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-lg p-4 w-48 transform -rotate-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center mb-1">
                  <svg
                    className="w-5 h-5 text-purple-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                  <span className="text-sm font-medium">Total Cards</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">From all tiers</div>
                <div className="text-2xl font-bold">210.5k</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
