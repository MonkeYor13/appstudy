import { View, Text } from "react-native";
import React from "react";

export default function Texto() {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        ---texto---
      </Text>
      <Text style={{ marginBottom: 20 }}>Esto es un Text</Text>
    </View>
  );
}
