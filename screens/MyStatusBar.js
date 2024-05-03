import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function MyStatusBar() {
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
          ----StatusBar----
        </Text>
        <StatusBar
          backgroundColor="lightgreen"
          barStyle="dark-content"
          // hidden para ocualtar los iconos de fecha y wifi, etc
        />
        <Text>ver la parte superior de toda la pantalla</Text>
    </View>
  )
}