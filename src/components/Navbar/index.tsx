import { useState } from 'react';
import { Car, Home, Info, Phone, Settings, Menu, X, CarFront, Calendar, CreditCard, MapPin, Clock, HelpCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CarRental</span>
            </div>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
              <div className="flex space-x-6">
                <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </a>
                <a href="/browse-cars" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                  <CarFront className="h-4 w-4 mr-1" />
                  Browse Cars
                </a>
                <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                  <Calendar className="h-4 w-4 mr-1" />
                  Reservations
                </a>
                <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                  <CreditCard className="h-4 w-4 mr-1" />
                  Pricing
                </a>
                <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                  <MapPin className="h-4 w-4 mr-1" />
                  Locations
                </a>
                <a href="/how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                  <Clock className="h-4 w-4 mr-1" />
                  How It Works
                </a>
                <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Support
                </a>
              </div>
            </div>

            {/* Login/Signup Button */}
            <div className="hidden sm:flex sm:items-center">
              <a href='/login'>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Login / Sign Up
              </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 text-base font-medium">
              <Home className="inline-block h-4 w-4 mr-2" />
              Home
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              <CarFront className="inline-block h-4 w-4 mr-2" />
              Browse Cars
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              <Calendar className="inline-block h-4 w-4 mr-2" />
              Reservations
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              <CreditCard className="inline-block h-4 w-4 mr-2" />
              Pricing
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              <MapPin className="inline-block h-4 w-4 mr-2" />
              Locations
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              <Clock className="inline-block h-4 w-4 mr-2" />
              How It Works
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              <HelpCircle className="inline-block h-4 w-4 mr-2" />
              Support
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;