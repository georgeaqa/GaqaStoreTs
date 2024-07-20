import { supabase } from "./supabase";
import { Alert } from "react-native";

type profileSupabaseProps = {
  user_id: string | null;
  user_first_name: string | null;
  user_last_name: string | null;
  user_avatar: string | null;
};

export async function create_profile({
  user_id,
  user_first_name,
  user_last_name,
  user_avatar,
}: profileSupabaseProps) {
  try {
    const { error } = await supabase.from("profile").insert({
      user_id,
      user_first_name,
      user_last_name,
      user_avatar,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error: any) {
    Alert.alert("Error al crear perfil", error.message);
  }
}
