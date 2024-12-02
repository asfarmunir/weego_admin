export interface IProperty {
  address: string;
  _id: string;
  acres: number;
  name: string;
  description: string;
  photos: string[];
  insurance: string;
  gameAvailable: string;
  pricePerNight: number;
  city: string;
  owner:  { firstname: string; lastname: string; email: string };
  bookedDates: string[];
  location: { latitude: number; longitude: number };
  reviews: { user: string; review: string, rating:number }[];
  createdAt: Date,
}
