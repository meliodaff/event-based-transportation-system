import React, { Suspense } from "react";
import EventCard from "../../components/EventCard";
import supabase from "@/utils/supabase/server";
import Loading from "../../components/Loading";

const EventList = async () => {
  const { data: events, error: eventsError } = await supabase
    .from("open_events")
    .select("*");

  if (eventsError) {
    console.error("Error fetching raw events:", eventsError);
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      {events && events.length > 0
        ? events.map((event, index) => <EventCard key={index} event={event} />)
        : "No events yet"}
    </div>
  );
};

const Event = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-5">Events Management</h1>
      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </section>
  );
};

export default Event;
