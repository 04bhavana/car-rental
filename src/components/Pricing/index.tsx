import React, { useState } from 'react';
import { Car, Shield, Zap, Timer, Users, Fuel, Gauge, Award, Check } from 'lucide-react';

const pricingData = [
  {
    id: 1,
    category: "Economy",
    description: "Perfect for city trips",
    basePrice: 45,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800",
    features: [
      "Fuel efficient",
      "4 passengers",
      "Automatic transmission",
      "Air conditioning",
      "Bluetooth audio"
    ],
    cars: ["Toyota Corolla", "Honda Civic", "Hyundai Elantra"],
    additionalFees: {
      insurance: 10,
      gps: 5,
      additionalDriver: 8
    }
  },
  {
    id: 2,
    category: "Premium",
    description: "Luxury and comfort combined",
    basePrice: 85,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    featured: true,
    features: [
      "Leather seats",
      "5 passengers",
      "Premium audio system",
      "Advanced safety features",
      "Unlimited mileage",
      "Priority support"
    ],
    cars: ["BMW 3 Series", "Mercedes C-Class", "Audi A4"],
    additionalFees: {
      insurance: 15,
      gps: 5,
      additionalDriver: 8
    }
  }
];

const Pricing = () => {
  const [selectedDuration, setSelectedDuration] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const durationMultiplier = {
    daily: 1,
    weekly: 6,
    monthly: 22
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CarRental</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of vehicles to match your needs.
          </p>

          <div className="mt-8 inline-flex rounded-lg bg-gray-100 p-1">
            {["daily", "weekly", "monthly"].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration as 'daily' | 'weekly' | 'monthly')}
                className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  selectedDuration === duration ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={plan.image} alt={plan.category} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.category}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${(plan.basePrice * durationMultiplier[selectedDuration]).toFixed(0)}
                  </span>
                  <span className="text-gray-600 ml-2">/{selectedDuration.slice(0, -2)}y</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;
