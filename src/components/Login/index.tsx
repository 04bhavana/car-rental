import React, { useState } from 'react';
import { Car, LogIn, UserPlus } from 'lucide-react';

const cars = [
  { id: 1, name: "Tesla Model S", price: 150, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800", type: "Electric", seats: 5 },
  { id: 2, name: "BMW 7 Series", price: 200, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800", type: "Luxury", seats: 5 },
  { id: 3, name: "Mercedes G-Wagon", price: 250, image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800", type: "SUV", seats: 7 }
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && (isSignup ? name : true)) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-6 bg-blue-600">
            <div className="text-center">
              <Car className="h-12 w-12 text-white mx-auto" />
              <h2 className="mt-4 text-2xl font-bold text-white">{isSignup ? 'Create an Account' : 'Welcome Back'}</h2>
              <p className="mt-2 text-blue-200">{isSignup ? 'Sign up to start renting cars' : 'Please sign in to your account'}</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Your Name" className="block w-full rounded-lg border-gray-300 bg-gray-50 pl-3 py-2" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="you@example.com" className="block w-full rounded-lg border-gray-300 bg-gray-50 pl-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder="Enter your password" className="block w-full rounded-lg border-gray-300 bg-gray-50 pl-3 py-2" />
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              {isSignup ? <UserPlus className="h-5 w-5 mr-2" /> : <LogIn className="h-5 w-5 mr-2" />}
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>

            <p className="text-center text-sm text-gray-600">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button type="button" className="text-blue-600 hover:text-blue-500" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold">Car Rental</h1>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-gray-600 hover:text-gray-900">Logout</button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-600">{car.type} • {car.seats} seats</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${car.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Rent Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Login;
