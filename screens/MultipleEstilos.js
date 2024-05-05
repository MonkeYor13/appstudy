import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MultipleEstilos() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          textAlign: "center",
          textTransform: "uppercase",
          marginTop: 20,
        }}
      >
        ----Multiples Estilos----
      </Text>

      <View style={[styles.box, styles.lightblueBg, styles.shadownAndroid]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box </Text>
      </View>

      <View style={[styles.darkMode]}>
        <Text style={styles.darkModeTexto}>Style inheritance <Text style={styles.boldTexto}>in bold</Text> </Text>
      </View>
    </View>
  );
}

//se puede agregar multiples estilos css en los componentes colocando entre [ ]

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 150,
    height: 150,
    //padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 10,
  },
  lightblueBg: { backgroundColor: "lightblue" },
  lightgreenBg: { backgroundColor: "lightgreen" },
  shadownAndroid: {
    elevation: 10,
  },
  darkMode:{
    backgroundColor: 'black',
},
darkModeTexto: {
    color: 'white'
  },
  boldTexto:{
    fontWeight: 'bold'
  }
});
