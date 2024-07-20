import { ActivityIndicator, Image, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { get_character } from "@/src/lib/characterSupabase";
import { CustomText, CustomButton } from "@/src/components";
import { addToCart, removeFromCart } from "@/src/store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";
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
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);
  const [ifInCart, setIfInCart] = useState(false);
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

  useEffect(() => {
    if (character && cartCharacters) {
      const isInCart = cartCharacters.some(
        (cartCharacter: any) =>
          cartCharacter.characterId === character.characterId
      );
      setIfInCart(isInCart);
    }
  }, [cartCharacters, character]);

  const handleAddToCart = () => {
    dispatch(addToCart(character));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(character));
  };

  return (
    <View className="flex-1 items-center justify-center gap-3 p-1 bg-white">
      {isLoading ? (
        <>
          <Stack.Screen options={{ title: "Cargando..." }} />
          <ActivityIndicator size="large" className="color-primary" />
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
          {ifInCart ? (
            <CustomButton onPress={handleRemoveFromCart}>
              Eliminar del carrito
            </CustomButton>
          ) : (
            <CustomButton onPress={handleAddToCart}>
              Agregar al carrito
            </CustomButton>
          )}
        </>
      )}
    </View>
  );
}
