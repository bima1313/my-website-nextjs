import { createClient, PostgrestSingleResponse } from "@supabase/supabase-js";
import { About, Portfolio } from "@/models/definitions";

// initialize
const supabaseUrl = `${process.env.SUPABASE_URL}`;
const supabaseKey = `${process.env.SUPABASE_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchPortfolio() {
  const { data, error }: PostgrestSingleResponse<Portfolio[]> = await supabase
    .from("portfolio")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    // return `Error fetch Portfolio: ${error.code}`;
    return null;
  }
  return data;
}
export async function fetchAbout() {
  const { data, error }: PostgrestSingleResponse<About[]> = await supabase
    .from("about")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    // return `Error fetch About: ${error.code}`;
    return null;
  }
  return data;
}
