import { View, Text, Button } from "react-native";
import React from "react";

export default function Botones() {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          textAlign: "center",
          textTransform: "uppercase",
          marginTop: 20,
        }}
      >
        ----Botones----
      </Text>
      <Button
        title="Press"
        onPress={() => console.log("boton presionado")}
        color="midnightblue"
      />
    </View>
  );
}
