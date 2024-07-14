import { supabase } from "./supabase";
import { Alert } from "react-native";

type authSupabaseProps = {
  email: string;
  password: string;
};

export async function sign_up_with_password({
  email,
  password,
}: authSupabaseProps) {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    } else {
      throw new Error("Registro exitoso");
    }
  } catch (error: any) {
    throw new Error("Error al registrarse:", error.message);
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
      throw new Error("Inicio de sesión exitoso");
    }
  } catch (error: any) {
    throw new Error("Error al iniciar sesión:", error.message);
  }
}

export async function log_out() {
  try {
    await supabase.auth.signOut();
  } catch (error: any) {
    throw new Error("Error al desconectarse:", error.message);
  }
}
