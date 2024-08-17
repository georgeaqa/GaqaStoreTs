import { supabase } from "./supabase";

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
    }
  } catch (error: any) {
    throw new Error(error.message);
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
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function log_out() {
  try {
    await supabase.auth.signOut();
  } catch (error: any) {
    throw new Error(error.message);
  }
}
