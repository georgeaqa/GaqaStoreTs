import { supabase } from "./supabase";

type orderSupabaseProps = {
  order_id: string;
  user_id: string;
  order_detail: string[];
  order_total: number;
};

export async function save_order({
  user_id,
  order_detail,
  order_total,
}: Partial<orderSupabaseProps>) {
  try {
    const { error } = await supabase.from("orders").insert({
      user_id,
      order_detail,
      order_total,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function get_order({ user_id }: Partial<orderSupabaseProps>) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function get_order_detail({ order_id }: Partial<orderSupabaseProps>) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("order_detail")
      .eq("id", order_id);

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
