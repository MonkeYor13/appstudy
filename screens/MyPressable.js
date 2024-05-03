import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

export default function MyPressable() {
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
        ----Pressable----
      </Text>
      <Pressable onPress={() => console.log("Imagen Presionada")}>
        <Image
          source={{ uri: "https://picsum.photos/id/237/200" }}
          style={{ width: 100, height: 100 }}
        />
      </Pressable>
      <Pressable onLongPress={() => console.log("Texto Presionada")}>
        <Text>
          Duis proident commodo incididunt ut minim nisi quis anim quis
          cupidatat officia commodo qui.
        </Text>
      </Pressable>
    </View>
  )
}
