import {  About } from "@/models/definitions";
import { createClient, PostgrestSingleResponse } from "@supabase/supabase-js";

// initialize
const supabaseUrl = `${process.env.SUPABASE_URL}`;
const supabaseKey = `${process.env.SUPABASE_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchAbout() {
  const { data, error }: PostgrestSingleResponse<About[]> = await supabase
    .from("about")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return `Error fetch teck stack =  ${error.code}`;
  }
  return data;
}

export async function GET() {
  try {
    return Response.json(await fetchAbout());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
