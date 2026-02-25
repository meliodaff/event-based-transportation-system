import EventView from "./EventView";
import { addEventActions } from "@/app/admin/event/addEvent";
const EventList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`);
  const { events } = await res.json();
  console.log(events);
  return <EventView events={events} addEventActions={addEventActions} />;
};

export default EventList;
