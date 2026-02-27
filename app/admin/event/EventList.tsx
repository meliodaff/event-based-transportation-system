import EventView from "./EventView";
import { addEventActions } from "@/app/admin/event/addEvent";
import supabase from "@/utils/supabase/server";
const EventList = async () => {
  const { data: events, error } = await supabase
    .from("open_events")
    .select("*");

  if (error) {
    console.log(error);
    return;
  }

  console.log(events);
  return <EventView events={events} addEventActions={addEventActions} />;
};

export default EventList;
