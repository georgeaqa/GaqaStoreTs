import { View, ActivityIndicator, FlatList } from "react-native";
import { Stack, router } from "expo-router";
import { get_characters } from "@/src/lib/characterSupabase";
import { CustomProductList, CustomText } from "@/src/components";
import React, { useEffect, useState } from "react";
export default function ProductsScreen() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
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
    return (
      <CustomProductList
        item={item}
        onPress={() => router.push(`/Products/${item.characterId}`)}
      />
    );
  };

  return (
    <View className="flex-1 items-center justify-center p-1 bg-white">
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
        <CustomText> No se encontraron resultados. </CustomText>
      ) : (
        <FlatList
          data={filteredCharacters}
          renderItem={renderItemCharacter}
          keyExtractor={(item: any) => item.characterId}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          className="w-full"
          contentContainerStyle={{ gap: 3 }}
          numColumns={2}
        />
      )}
    </View>
  );
}
