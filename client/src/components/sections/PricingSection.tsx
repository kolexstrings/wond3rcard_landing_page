import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, X } from "lucide-react";

function PriceCard({
  title,
  price,
  features,
  popular = false,
  index,
}: {
  title: string;
  price: string;
  features: Array<{ text: string; included: boolean }>;
  popular?: boolean;
  index: number;
}) {
  return (
    <motion.div
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
        popular ? "transform scale-105 border-2 border-purple-600 relative" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
          Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="text-3xl font-bold mb-6">
          ${price}{" "}
          <span className="text-base font-normal text-gray-600">/month</span>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            {title === "Free" &&
              "Perfect for individuals just getting started."}
            {title === "Pro" && "Ideal for professionals and freelancers."}
            {title === "Business" && "For teams and growing businesses."}
          </p>
          <Button
            variant={popular ? "default" : "outline"}
            className={`w-full ${
              popular
                ? "gradient-purple text-white shadow-lg hover:shadow-xl transition duration-300"
                : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition duration-300"
            }`}
            onClick={() => {
              window.location.href =
                "https://wond3rcard-frontend.vercel.app/#/signUp";
            }}
          >
            Get Started
          </Button>
        </div>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0 opacity-50" />
              )}
              <span className={!feature.included ? "opacity-50" : ""}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricingPlans = [
    {
      title: "Basic",
      price: "0",
      features: [
        { text: "1 Digital Card", included: true },
        { text: "Basic Customization", included: true },
        { text: "QR Code Sharing", included: true },
        { text: "Up to 5 Social Links", included: true },
        { text: "Advanced Analytics", included: false },
        { text: "Multiple Profiles", included: false },
      ],
    },
    {
      title: "Premium",
      price: "9",
      popular: true,
      features: [
        { text: "5 Digital Cards", included: true },
        { text: "Advanced Customization", included: true },
        { text: "All Sharing Methods", included: true },
        { text: "Unlimited Social Links", included: true },
        { text: "Basic Analytics", included: true },
        { text: "Personal & Business Profiles", included: true },
      ],
    },
    {
      title: "Business",
      price: "65",
      features: [
        { text: "Unlimited Digital Cards", included: true },
        { text: "Premium Customization", included: true },
        { text: "Team Management", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "CRM Integration", included: true },
        { text: "Bulk Card Creation", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Choose Plan That's Right For You
          </h2>
          <p className="text-xl text-gray-600">
            Wond3rcard offers flexible pricing tailored to individuals,
            professionals, and enterprises. Choose between affordable monthly
            plans or save with yearly subscriptions.
          </p>

          <div className="flex justify-center mt-8">
            <div className="bg-gray-200 p-1 rounded-lg inline-flex">
              <button
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-700"
                }`}
                onClick={() => setBillingPeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-700"
                }`}
                onClick={() => setBillingPeriod("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PriceCard
              key={plan.title}
              title={plan.title}
              price={
                billingPeriod === "yearly"
                  ? (parseFloat(plan.price) * 10).toString()
                  : plan.price
              }
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
