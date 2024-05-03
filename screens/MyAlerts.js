import { View, Text, Alert, Button } from "react-native";
import React from "react";

export default function MyAlerts() {
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
        ----Alertas----
      </Text>
      <Button title="Alerta 1" onPress={() => Alert.alert("Soy una alerta")} />
      <Button
        title="Alerta 2"
        onPress={() => Alert.alert("Soy una alerta", "DBA Incorrect")}
      />
      <Button
        title="Alerta 3"
        onPress={() =>
          Alert.alert("Soy una alerta", "DBA Incorrect", [
            { text: "Cancel", onPress: () => console.log("Cancel pressed") },
            { text: "OK", onPress: () => console.log("OK pressed") },
          ])
        }
      />
    </View>
  );
}
