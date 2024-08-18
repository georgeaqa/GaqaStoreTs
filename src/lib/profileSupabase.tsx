import { supabase } from "./supabase";

type profileSupabaseProps = {
  user_id: string;
};

export async function get_profile({ user_id }: Partial<profileSupabaseProps>) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user_id);

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
