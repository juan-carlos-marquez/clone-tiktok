import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/avatar.png")}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  button: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    top: 30,
    left: 14,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    color: "#fff"
  }
})