import { Car } from '../models/car';

const cars: Car[] = [
  {  brand: 'Hyundai',
    model: 'i30',
    year: 2008,
    price: 5500,
    km: 120000,
    engine: {
      consumption: 4,
      fuel: 'lpg',
      power: 109
    }
  },
  {
    brand: 'Audi',
    model: 'Q5',
    engine: {
      consumption: 4,
      fuel: 'diesel',
      power: 200
    },
    km: 50000,
    price: 7500,
    year: 2008
  },
  {
    brand: 'Hyundai',
    model: '',
    engine: {
      consumption: 4,
      fuel: 'lpg',
      power: 100
    },
    km: 120000,
    price: 5500,
    year: 2008
  }
];
export default cars;
