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

export async function addEventActions(event: FormData) {
  const file = event.get("banner") as File;
  let bannerUrl = "";

  if (file && file.size > 0) {
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    const { error: uploadError } = await supabase.storage
      .from("event-banners")
      .upload(fileName, file);
    if (uploadError) {
      console.error("Error uploading banner:", uploadError);
      throw new Error("Failed to upload banner");
    }

    const { data: urlData } = await supabase.storage
      .from("event-banners")
      .getPublicUrl(fileName);
    bannerUrl = urlData.publicUrl;
  }

  const { data, error } = await supabase
    .from("events")
    .insert({
      event_name: event.get("event_name") as string,
      event_location: event.get("event_location") as string,
      event_day: Number(event.get("event_day")),
      event_date: event.get("event_date") as string,
      event_time: event.get("event_time") as string,
      event_banner: bannerUrl,
    })
    .select();

  console.log(data);

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
