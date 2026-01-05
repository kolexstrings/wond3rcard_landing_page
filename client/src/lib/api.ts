const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export interface PricingTier {
  name: string;
  monthly: {
    price: number;
    currency: string;
    symbol: string;
  };
  yearly: {
    price: number;
    currency: string;
    symbol: string;
  };
}

export interface PricingResponse {
  status: string;
  message: string;
  data: {
    detectedCountry: string;
    selectedCurrency: string;
    tiers: Array<{
      id: string;
      name: string;
      description: string;
      features: string[];
      trialPeriod: number;
      autoRenew: boolean;
      monthly: {
        price: number;
        currency: string;
        symbol: string;
        durationInDays: number;
      };
      yearly: {
        price: number;
        currency: string;
        symbol: string;
        durationInDays: number;
      };
    }>;
  };
}

export async function fetchPricingTiers(): Promise<PricingResponse> {
  const response = await fetch(`${API_BASE_URL}/subscriptions/tiers`);

  if (!response.ok) {
    throw new Error(`Failed to fetch pricing: ${response.statusText}`);
  }

  return response.json();
}
