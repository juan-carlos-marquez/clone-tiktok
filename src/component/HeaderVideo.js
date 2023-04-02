import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {MaterialIcons, Ionicons} from "@expo/vector-icons"
export default function HeaderVideo() {
    return (
        <View style={styles.container}>
            <View>
                <MaterialIcons name="live-tv" size={24} color="#fff" />
            </View>
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.text}>Musica</Text>
            </View>
            <View>
                <Text style={styles.text}>Seguindo</Text>
            </View>
            <View>
                <Ionicons name='search-outline' color="#fff" size={30} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: "row",
        top: 15,
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10
    },
    text: {
        color: "#c2c2c2"
    }
})