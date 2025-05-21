import React from "react";
import { CheckIcon } from "lucide-react";

const pricingOptions = [
  {
    title: "Basic NFC Card (Plastic)",
    price: "14",
    features: ["Simple and durable plastic NFC card"],
  },
  {
    title: "Premium Metal NFC Card",
    price: "35",
    features: ["Sleek metal card with premium finish"],
  },
  {
    title: "Custom-Branded NFC Card (Event)",
    price: "35",
    features: ["Minimum order: 10. Ideal for businesses & events"],
  },
];

export default function NfcCardPricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f7f3fe] text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">NFC Card Pricing</h2>
        <p className="text-lg text-gray-600 mb-12">(One-Time Purchase)</p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
              <p className="text-4xl font-bold text-purple-600 mb-6">
                ${option.price}
              </p>
              <ul className="text-left space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-purple-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
