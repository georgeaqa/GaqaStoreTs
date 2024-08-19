import { ActivityIndicator, Image, View } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { get_character } from "@/src/lib/characterSupabase";
import { CustomText, CustomButton } from "@/src/components";
import { addToCart } from "@/src/store/actions/cart.action";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

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

  const handleAddToCart = () => {
    dispatch(addToCart(character));
    router.back();
  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      {isLoading ? (
        <>
          <Stack.Screen options={{ title: "Cargando..." }} />
          <ActivityIndicator size="large" className="color-primary" />
        </>
      ) : (
        <>
          <Stack.Screen options={{ title: character?.characterName }} />
          <View className="flex-1 w-full items-center justify-center gap-8 m-1 p-1 bg-white rounded-3xl ">
            <Image
              source={{ uri: character?.characterImage }}
              className="w-full aspect-3/4"
              resizeMode="contain"
            />
            <CustomText className="text-2xl text-primary">
              {"Precio: S/ " + character?.characterPrice.toFixed(2)}
            </CustomText>
            <CustomButton
              classNameButton=" bg-primary"
              title="Agregar al carrito"
              classNameTitle="text-white"
              onPress={handleAddToCart}
            />
          </View>
        </>
      )}
    </View>
  );
}
