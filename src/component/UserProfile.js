import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
export default function UserProfile({ user }) {
    return (
        <View style={styles.container}>
            <Text style={styles.user}>{user}</Text>
            <Ionicons style={styles.icon} name="qr-code-sharp" size={15} color="#c2c2c2" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },
    user: {
        fontSize: 18,
        fontWeight: "600"
    },
    icon: {
        marginTop: 5,
        marginLeft: 2
    }
})