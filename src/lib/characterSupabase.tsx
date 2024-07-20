import { supabase } from "./supabase";
import { Alert } from "react-native";

export async function get_characters() {
  try {
    const { data, error } = await supabase
      .from("character")
      .select("*")
      .order("characterName", { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error: any) {
    Alert.alert(error.message);
  }
}

export async function get_character(characterId: string) {
  try {
    const { data, error } = await supabase
      .from("character")
      .select("*")
      .eq("characterId", characterId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error: any) {
    Alert.alert(error.message);
  }
}
