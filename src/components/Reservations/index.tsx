import React, { useState } from 'react';
import { Car, Calendar, Clock, MapPin, AlertCircle, CheckCircle2, XCircle, User } from 'lucide-react';

// Define the possible status values
type ReservationStatus = 'active' | 'upcoming' | 'completed' | 'cancelled';

const statusColors: Record<ReservationStatus, string> = {
  active: "bg-green-100 text-green-800",
  upcoming: "bg-blue-100 text-blue-800",
  completed: "bg-gray-100 text-gray-800",
  cancelled: "bg-red-100 text-red-800"
};

const reservations: {
  id: number;
  car: { name: string; image: string; licensePlate: string };
  startDate: string;
  endDate: string;
  status: ReservationStatus;
  pickupLocation: string;
  dropoffLocation: string;
  totalPrice: number;
  customer: { name: string; phone: string };
}[] = [
  {
    id: 1,
    car: {
      name: "Tesla Model 3",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800",
      licensePlate: "ABC123"
    },
    startDate: "2024-03-20",
    endDate: "2024-03-23",
    status: "active",
    pickupLocation: "Downtown Branch",
    dropoffLocation: "Airport Branch",
    totalPrice: 225,
    customer: {
      name: "John Smith",
      phone: "+1 (555) 123-4567"
    }
  },
  // Add other reservations here
];

const StatusIcon = ({ status }: { status: ReservationStatus }) => {
  switch (status) {
    case 'active':
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    case 'upcoming':
      return <AlertCircle className="h-5 w-5 text-blue-600" />;
    case 'completed':
      return <CheckCircle2 className="h-5 w-5 text-gray-600" />;
    case 'cancelled':
      return <XCircle className="h-5 w-5 text-red-600" />;
    default:
      return null;
  }
};

const Reservations = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredReservations = filterStatus === "all"
    ? reservations
    : reservations.filter(res => res.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CarRental</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Reservations</h2>
        <div className="flex space-x-2 mb-6">
          {["all", "active", "upcoming", "completed", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                filterStatus === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredReservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden">
                    <img
                      src={reservation.car.image}
                      alt={reservation.car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {reservation.car.name}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize ${statusColors[reservation.status]}`}>
                        <StatusIcon status={reservation.status} />
                        <span className="ml-2">{reservation.status}</span>
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{reservation.startDate} to {reservation.endDate}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <User className="h-5 w-5 mr-2" />
                        <span>{reservation.customer.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Reservations;
