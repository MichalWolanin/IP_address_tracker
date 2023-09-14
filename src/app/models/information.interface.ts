export interface ApiData {
  ip: string;
  location: Location;
  isp: string;
}

export interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  timezone: string;
}
