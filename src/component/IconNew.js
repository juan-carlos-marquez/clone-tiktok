import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons"

export default function IconAdd() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <View style={styles.med}>
          <Ionicons name='add' color="#000" size={30} />
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fd014e",
    borderRadius: 10,
    justifyContent: "flex-start",
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
  },
  med: {
    backgroundColor: '#fff',
    marginLeft: 5,
    borderRadius:10,
    width:40,
    alignItems:'center'
  },

  icon: {
    flexDirection: 'row',
    backgroundColor: '#00ffea',
    borderRadius: 10,
    justifyContent: 'center',

  }
})