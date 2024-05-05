import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>
      {/* <Image source={image} accessibilityLabel={`${name} pokemon`} /> */}
      <View>
        <Text>{type}</Text>
      </View>
      <View>
        <Text>Moves: {moves.join(', ')}</Text>
      </View>
      <View>
        <Text>Weakness: {weaknesses.join(', ')}</Text>
      </View>
      
    </View>
  );
}

//definimos la sombra si es en un dispositivo ios o android
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
