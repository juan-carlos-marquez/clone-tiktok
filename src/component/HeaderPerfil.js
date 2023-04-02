import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Ionicons,FontAwesome5,MaterialCommunityIcons} from "@expo/vector-icons"

export default function HeaderPerfil() {
  return (
    <View style={styles.container}>
        <View>
          <FontAwesome5 name="coins" size={20} color="#ffbf00" />
        </View>
        <View style={styles.constainerSecondary}>
          <View style={styles.center}>
            <Text style={styles.add}>+</Text>
            <Text style={styles.addText}>Adicionar nome</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </View>
        <View style={{ flexDirection: 'row' }}>

          <MaterialCommunityIcons name="shoe-print" size={30} color="black" style={{ marginRight: 10 }} />
          <Ionicons name='menu' color="#000" size={30} />
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
         width: "100%", 
         justifyContent: "space-between",
          paddingHorizontal: 8 

    },
    constainerSecondary:{
        flexDirection: "row"
    },
    center:{
        flexDirection: "row",
         backgroundColor: "#f2f2f2",
          borderRadius: 5, 
          padding: 2, 
          height: 25
    },
    add:{
        marginRight: 5,
         color: "#5d5e61" 
    },
    addText:{
        color: "#5d5e61",
         fontWeight: "600" 
    }
})