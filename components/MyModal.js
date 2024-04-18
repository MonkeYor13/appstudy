import { View, Text, Modal, StyleSheet, Button, Switch } from "react-native";
import React, { useState } from "react";

export default function MyModal({ isModalOpen, setIsModalOpen }) {
  const [switch1, setSwitch1] = useState(false);
  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType="slide">
        <View style={styles.container}>
          <View style={styles.popup}>
            <Text
              style={{
                textAlign: "center",
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Set your Settings
            </Text>
            <Text style={styles.optiontext} >👽 option 1</Text>
            <Switch value={switch1} onChange={() => setSwitch1(!switch1)} />
            <Button
              title="Close and Save"
              onPress={() => setIsModalOpen(!setIsModalOpen)}
              color=""
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  optiontext:{
    
  }
});
