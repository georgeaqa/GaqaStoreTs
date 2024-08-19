import { supabase } from "@/src/lib/supabase";

type avatarSupabaseProps = {
  avatar_url: string | any;
};

export async function get_avatar_url({ avatar_url }: Partial<avatarSupabaseProps>) {
  try {
    const { data, error } = await supabase.storage
      .from("avatars")
      .createSignedUrl(avatar_url, 3600);

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}