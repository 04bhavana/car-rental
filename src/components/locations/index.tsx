// Location.js
import { useState } from 'react';

const Locations = () => {
  const [locations] = useState([
    {
      city: 'Mumbai',
      cars: ['Maruti Swift', 'Hyundai i20', 'Toyota Innova', 'Honda City']
    },
    {
      city: 'Delhi',
      cars: ['Suzuki Baleno', 'Ford EcoSport', 'Mahindra Thar', 'Kia Seltos']
    },
    {
      city: 'Bangalore',
      cars: ['Tata Nexon', 'Renault Duster', 'Volkswagen Polo', 'Skoda Superb']
    },
    {
      city: 'Chennai',
      cars: ['Honda Amaze', 'Hyundai Verna', 'Toyota Fortuner', 'MG Hector']
    },
    {
      city: 'Hyderabad',
      cars: ['Maruti WagonR', 'Kia Carens', 'Jeep Compass', 'Hyundai Creta']
    },
    {
      city: 'Pune',
      cars: ['Tata Punch', 'Volkswagen Virtus', 'Nissan Magnite', 'Mahindra Scorpio']
    }
  ]);

  return (
    <div>
      <h1>Available Cars by Location</h1>
      {locations.map((location, index) => (
        <div key={index}>
          <h2>{location.city}</h2>
          <ul>
            {location.cars.map((car, carIndex) => (
              <li key={carIndex}>{car}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Locations;
