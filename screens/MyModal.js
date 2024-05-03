import React from "react";
import { View, Text, Modal, Button } from "react-native";
import { useState } from "react";

export default function MyModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
        ----Modal----
      </Text>
      <Button title="activar Modal" onPress={() => setIsModalVisible(true)} />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
      >
        <View
          style={{
            backgroundColor: "gray",
            padding: 30,
            borderRadius: 10,
            flex: 1,
          }}
        >
          <Text>Modal content</Text>
          <Button title="Cerrar" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
