import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
export default function ProfilePicure() {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/avatar.png')}
            />
            <View style={styles.icon}>

                <Ionicons name='add-circle' color="#00bfff" size={36} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 1,
        borderColor: "#dbdbdb"
    },
    icon: {
        position: 'absolute',
        end: 2,
        bottom: 3,
        paddingStart: 1.5,
        backgroundColor: "#fff",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center",
        width: 38,
        height: 38
    }
})