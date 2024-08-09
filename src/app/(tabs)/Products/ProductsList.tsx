import { View, ActivityIndicator, FlatList } from "react-native";
import { Stack, router } from "expo-router";
import { get_characters } from "@/src/lib/characterSupabase";
import { CustomProductList, CustomText } from "@/src/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProductsScreen() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const charactersData: any = await get_characters();
        setCharacters(charactersData);
      } catch (error: any) {
        console.error("Error fetching characters:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character: any) =>
    character.characterName
      .toLowerCase()
      .includes(searchCharacter.toLowerCase())
  );

  const renderItemCharacter = ({ item }: any) => {
    const disabled: boolean = cartCharacters.some(
      (cartCharacter: any) => cartCharacter.characterId === item.characterId
    );

    const route: any = `/Products/${item.characterId}`;
    return (
      <CustomProductList
        item={item}
        onPress={() => router.push(route)}
        disabled={disabled}
      />
    );
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen
        options={{
          title: "Lista de Productos",
          headerSearchBarOptions: {
            placeholder: "Buscar",
            onChangeText: (event) => setSearchCharacter(event.nativeEvent.text),
          },
        }}
      />
      {isLoading ? (
        <ActivityIndicator size="large" className="color-primary" />
      ) : filteredCharacters.length === 0 ? (
        <CustomText className="text-primary">
          No se encontraron resultados.
        </CustomText>
      ) : (
        <FlatList
          data={filteredCharacters}
          renderItem={renderItemCharacter}
          keyExtractor={(item: any) => item.characterId}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}
    </View>
  );
}
