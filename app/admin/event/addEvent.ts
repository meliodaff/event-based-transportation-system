"use server";

import supabase from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface Event {
  event_name: string;
  event_location: string;
  event_day: number;
  event_date: string;
  event_time: string;
  event_banner: string;
}

export async function addEventActions(event: Event) {
  const { data, error } = await supabase.from("events").insert(event).select();

  if (error) {
    console.error("Error inserting event:", error);
    return;
  }

  revalidatePath("/admin/event");
  return {
    success: true,
    message: "Event submitted successfully!",
    status: 200,
  };
}
