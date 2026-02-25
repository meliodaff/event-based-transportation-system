import { NextRequest, NextResponse as res } from "next/server";
import supabase from "@/utils/supabase/server";

export async function GET() {
  const { data: events, error: eventsError } = await supabase
    .from("open_events")
    .select("*");

  if (eventsError) {
    return res.json({ error: eventsError.message }, { status: 500 });
  }
  return res.json({ events }, { status: 200 });
}
