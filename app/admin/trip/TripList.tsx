import supabase from "@/utils/supabase/server";
import TripView from "./TripView";

const TripList = async () => {
  const { data, error } = await supabase.from("open_or_full_trips").select("*");

  if (error) {
    alert("Error fetching trips:" + error.message);
    return;
  }

  const trips = data.map((trip) => ({
    tripId: trip.trip_id,
    day: trip.day,
    imageSrc: trip.image_src,
    title: trip.title,
    venue: trip.venue,
    date: trip.date,
    seatsLeft: trip.seats_left,
    tripStatus: trip.trip_status,
  }));

  return <TripView trips={trips} />;
};

export default TripList;
