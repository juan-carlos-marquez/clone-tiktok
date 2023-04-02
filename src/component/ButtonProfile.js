import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function ButtonProfile({text}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.container}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
container:{
    backgroundColor: '#f2f2f2',
     padding: 8, 
     borderRadius: 5,
     marginLeft:4 
},
text:{
    fontWeight: "600" 
}
})