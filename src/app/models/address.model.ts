export interface Address {
  street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation
}

interface GeoLocation {
  lat: number;
  lng: number;
}