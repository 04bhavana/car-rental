import React, { useState } from 'react';
import { Car, Filter, Search, Star } from 'lucide-react';

// Sample car data - in a real app this would come from an API/database
const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800",
    price: 75,
    type: "Electric",
    seats: 5,
    rating: 4.8,
    available: true
  },
  {
    id: 2,
    name: "BMW 3 Series",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    price: 85,
    type: "Luxury",
    seats: 5,
    rating: 4.6,
    available: true
  },
  {
    id: 3,
    name: "Toyota Camry",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800",
    price: 55,
    type: "Sedan",
    seats: 5,
    rating: 4.5,
    available: true
  },
  {
    id: 4,
    name: "Range Rover Sport",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
    price: 120,
    type: "SUV",
    seats: 7,
    rating: 4.9,
    available: false
  }
];

const carTypes = ["All", "Electric", "Luxury", "Sedan", "SUV"];

const BrowseCars = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = cars.filter(car => {
    const matchesType = selectedType === "All" || car.type === selectedType;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {carTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                {!car.available && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Currently Unavailable</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{car.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Filter className="h-4 w-4 mr-1" />
                  <span>{car.type}</span>
                  <span className="mx-2">•</span>
                  <span>{car.seats} seats</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-lg font-bold text-blue-600">${car.price}/day</div>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      car.available
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!car.available}
                  >
                    {car.available ? "Rent Now" : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default BrowseCars;