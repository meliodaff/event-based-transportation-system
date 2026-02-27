export interface TripProps {
  tripId?: string;
  day?: number;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  venue: string;
  date: string;
  seatsLeft: number;
  tripStatus: "OPEN" | "FULL" | "COMPLETED" | "CANCELLED";
}
