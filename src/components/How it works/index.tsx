import React from 'react';
import { Car, Shield, Users, MapPin, Phone, Mail, Clock, Star, Award, Heart, Leaf, Zap } from 'lucide-react';

const Howitworks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920"
            alt="Car rental fleet"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About CarRental</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Providing premium car rental services since 2010. We're committed to making your journey comfortable, safe, and memorable.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, CarRental began with a simple mission: to provide exceptional car rental services that exceed customer expectations. What started with a fleet of just 10 vehicles has grown into a comprehensive selection of over 500 premium vehicles across multiple categories.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be one of the leading car rental services in the region, serving both business and leisure travelers with our commitment to quality, convenience, and customer satisfaction.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1562519320-78d7f1c3b96e?auto=format&fit=crop&w=800"
                alt="Our showroom"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1">
            {/* Add values content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
