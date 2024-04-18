import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.texto}>Go to Stack Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  boton: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
});
