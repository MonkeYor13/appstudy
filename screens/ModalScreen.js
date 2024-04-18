import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import MyModal from "../components/MyModal";
import { useState } from "react";

export default function ModalScreen() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}} >
      <Text>ModalScreen</Text>
      <Button title="Open Modal" onPress={()=> setIsModalOpen(!isModalOpen)} />
      <MyModal
      isModalOpen= {isModalOpen}
      setIsModalOpen = {setIsModalOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    boton: {
        borderRadius: 10,
        backgroundColor: 'red'
    },
})