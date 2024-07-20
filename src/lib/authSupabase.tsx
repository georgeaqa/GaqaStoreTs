import { supabase } from "./supabase";
import { create_profile } from "./profileSupabase";
import { Alert } from "react-native";

type authSupabaseProps = {
  email: string;
  password: string;
  user_id: string | null;
  user_first_name: string | null;
  user_last_name: string | null;
  user_avatar: string | null;
};

export async function sign_up_with_password({
  email,
  password,
  user_id,
  user_first_name,
  user_last_name,
  user_avatar,
}: authSupabaseProps) {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    } else {
      Alert.alert("Registro exitoso", "¡Gracias por registrarte!");
      create_profile({
        user_id,
        user_first_name,
        user_last_name,
        user_avatar,
      });
    }
  } catch (error: any) {
    Alert.alert("Error al registrarse", error.message);
  }
}

export async function sign_in_with_password({
  email,
  password,
}: authSupabaseProps) {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    } else {
      Alert.alert("Inicio de sesión exitoso");
    }
  } catch (error: any) {
    Alert.alert("Error al iniciar sesión:", error.message);
  }
}

export async function log_out() {
  try {
    await supabase.auth.signOut();
  } catch (error: any) {
    Alert.alert("Error al desconectarse:", error.message);
  }
}
