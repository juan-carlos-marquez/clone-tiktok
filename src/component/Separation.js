import React from 'react'
import { View, Text } from 'react-native'

export default function Separation() {
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ borderLeftWidth: 1, borderLeftColor: "#C2C2C2", height: 20 }}></Text>
        </View>
    )
}