import { Car, Clock, Calendar, CalendarDays, Star, ChevronRight, Shield, Award, Clock3 } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Drive Your Dreams Today</h1>
            <p className="text-xl mb-8">Experience luxury and comfort with our premium car rental service. Choose from our wide range of vehicles for any occasion.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
              Browse Cars <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 mb-8">With over a decade of experience in the car rental industry, we pride ourselves on providing exceptional service and maintaining a fleet of premium vehicles to meet all your transportation needs.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span>Quality Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className="w-6 h-6 text-blue-600" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-6 h-6 text-blue-600" />
                  <span>Modern Fleet</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury car showcase"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rental Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hourly Based */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Hourly Rental</h3>
              <p className="text-gray-600 mb-4">Perfect for quick trips and business meetings. Flexible hourly rates with minimum booking of 4 hours.</p>
              <ul className="text-sm text-gray-600">
                <li className="mb-2">✓ No long-term commitment</li>
                <li className="mb-2">✓ Includes fuel charges</li>
                <li>✓ Instant booking</li>
              </ul>
            </div>

            {/* Daily Based */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <Calendar className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Daily Rental</h3>
              <p className="text-gray-600 mb-4">Ideal for day trips and weekend getaways. Competitive daily rates with unlimited mileage.</p>
              <ul className="text-sm text-gray-600">
                <li className="mb-2">✓ 24-hour flexibility</li>
                <li className="mb-2">✓ Free cancellation</li>
                <li>✓ Roadside assistance</li>
              </ul>
            </div>

            {/* Monthly Based */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <CalendarDays className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Monthly Rental</h3>
              <p className="text-gray-600 mb-4">Best value for long-term rentals. Enjoy premium cars at discounted monthly rates.</p>
              <ul className="text-sm text-gray-600">
                <li className="mb-2">✓ Significant cost savings</li>
                <li className="mb-2">✓ Maintenance included</li>
                <li>✓ Flexible swap options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Additions to Our Fleet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&q=80&w=800"
                alt="Tesla Model S"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tesla Model S</h3>
                <p className="text-gray-600 mb-4">Electric Luxury Sedan</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">$200/day</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Book Now</button>
                </div>
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800"
                alt="BMW 7 Series"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">BMW 7 Series</h3>
                <p className="text-gray-600 mb-4">Luxury Executive Sedan</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">$180/day</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Book Now</button>
                </div>
              </div>
            </div>

            {/* Car 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800"
                alt="Mercedes G-Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mercedes G-Class</h3>
                <p className="text-gray-600 mb-4">Luxury SUV</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">$250/day</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Exceptional service! The car was in perfect condition, and the rental process was smooth and hassle-free. Will definitely use their service again!"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Customer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">Regular Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;