import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function MyActivityIndicator() {
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
        ----Activity Indicator----
      </Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        //animating={false} desctiva la animacion
      />
    </View>
  );
}
