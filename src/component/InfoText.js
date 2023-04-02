import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InfoTextProfile({primaryText, secondaryText}) {
    return (
        <View style={styles.container}>
            <Text style={styles.primaryText}>{primaryText}</Text>
            <Text style={styles.secondaryText}>{secondaryText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
         alignItems: "center",
          margin: 10 
    },
    primaryText:{
        fontWeight: "600", 
        fontSize: 18
    },
    secondaryText:{
        color: "#c2c2c2" 
    }
})