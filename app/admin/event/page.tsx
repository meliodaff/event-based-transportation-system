import React, { Suspense } from "react";
import Loading from "../../components/Loading";
import EventList from "./EventList";

const Event = async () => {
  console.log("Event Functional Component");
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
