import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import React from 'react'
const back = require("../assets/model2.jpg");
const modelo = require("../assets/model5.jpg");

export default function ImageAndBackgroung() {
  return (
    <View>
    <ImageBackground source={back} style={{ flex: 1 }}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      ----Imagenes y backgroung----
    </Text>
    <Image
      source={modelo}
      style={{ width: 200, height: 300, resizeMode: "cover" }}
    />
    <Image
      source={{ uri: "https://picsum.photos/id/237/200" }}
      style={styles.stretch}
    />
    <Text>
      Non consectetur veniam officia cupidatat fugiat deserunt consectetur
      in eiusmod cillum mollit ut ut ullamco. Nisi excepteur sunt sit
      ipsum reprehenderit do sunt mollit. Veniam ex deserunt non aute
      laborum enim. Mollit laboris irure qui proident et voluptate culpa
      dolore mollit. Nulla ut ipsum cupidatat duis Lorem eu sunt sunt
      occaecat ullamco irure.
    </Text>
  </ImageBackground>
  </View>

  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
  },
});