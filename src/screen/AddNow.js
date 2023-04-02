import React from 'react'
import { View } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
export default function AddNow() {
  return (
    <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
      <Ionicons name='camera' size={200} color="#c2c2c2" />
    </View>
  )
}