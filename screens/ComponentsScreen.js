import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

//importamos un solo archivo donde guardamo nuestras importaciones
import {
  ComponenteHijo,
  ImageAndBackgroung,
  Texto,
  Botones,
  MyPressable,
  MyModal,
  MyStatusBar,
  MyActivityIndicator,
  MyAlerts,
} from "./AExports";

export default function ComponentsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Texto />
        <ImageAndBackgroung />
        <Botones />
        <MyPressable />
        <MyModal />
        <MyStatusBar />
        <MyActivityIndicator />
        <MyAlerts />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: 20,
          }}
        >
          ----Pasar parametos----
        </Text>
        <ComponenteHijo name="Yorvis" />
        <ComponenteHijo name="Jesus" />
      </ScrollView>
    </View>
  );
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
