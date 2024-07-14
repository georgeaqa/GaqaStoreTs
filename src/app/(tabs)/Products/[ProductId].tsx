import { ActivityIndicator, Image, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { get_character } from "@/src/lib/characterSupabase";
import { CustomText, CustomButton } from "@/src/components";
import React, { useEffect, useState } from "react";

interface Character {
  characterId: string;
  characterName: string;
  characterImage: string;
  characterPrice: number;
  created_at: string;
}

export default function ProductDetailsScreen() {
  const { ProductId } = useLocalSearchParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCharacter() {
      try {
        if (ProductId !== undefined) {
          const characterData: any = await get_character(ProductId.toString());
          if (characterData) {
            setCharacter(characterData[0]);
          } else {
            setCharacter(null);
          }
        }
      } catch (error: any) {
        console.error("Error fetching character:", error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCharacter();
  }, []);
  return (
    <View className="flex-1 items-center gap-3 p-1 bg-white">
      {isLoading ? (
        <>
          <Stack.Screen options={{ title: "Cargando..." }} />
          <ActivityIndicator size="large" />
        </>
      ) : (
        <>
          <Stack.Screen options={{ title: character?.characterName }} />
          <Image
            source={{ uri: character?.characterImage }}
            className="w-full aspect-3/4"
            resizeMode="contain"
          />
          <CustomText className="text-2xl">
            {"Precio: S/ " + character?.characterPrice}
          </CustomText>
          <CustomButton>Agregar al carrito</CustomButton>
          <CustomButton> Eliminar del carrito</CustomButton>
        </>
      )}
    </View>
  );
}
