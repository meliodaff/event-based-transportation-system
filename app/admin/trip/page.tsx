import { Suspense } from "react";
import TripCard from "./TripCard";
import supabase from "@/utils/supabase/server";
import TripList from "./TripList";
import Loading from "./Loading";

export default async function Trip() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-5">Trip Planner</h1>
      <Suspense fallback={<Loading />}>
        <TripList />
      </Suspense>
    </section>
  );
}
