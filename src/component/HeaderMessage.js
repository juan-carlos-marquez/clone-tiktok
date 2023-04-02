import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
export default function HeaderMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Caixa de entrada</Text>
            <View style={styles.icons}>
                <Ionicons name='ellipse' color="#c2c2c2" size={10} />
                <Ionicons name='caret-down' color="#c2c2c2" size={10} />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        justifyContent: 'center',
         alignItems: 'center',
          flexDirection: "row", 
          paddingBottom: 10
    },
    text:{
        fontWeight: "bold" 
    },
    icons:{
        backgroundColor: "#f2f2f2", 
        flexDirection: "row",
         marginLeft: 2
    }
})