import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { Ionicons } from "@expo/vector-icons"

export default function SideVideos() {
    const [like, setLike] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.avatar} >
                <Avatar />
            </View>
            <TouchableOpacity style={styles.heart} onPress={() => setLike(!like)}>
                <Ionicons name="heart" color={like ? "red" : "white"} size={35} />
                <Text style={styles.textHeart}>12.3k</Text>
            </TouchableOpacity>
            <View style={styles.chat}>
                <Ionicons name="chatbubble-ellipses" color="#fff" size={35} />
                <Text style={styles.textChat}>157</Text>
            </View>
            <View style={styles.bookmark}>
                <Ionicons name='bookmark' color="#fff" size={35} />
                <Text style={styles.textBookmark}>1163</Text>
            </View>
            <View style={styles.whatsapp}>
                <Ionicons name='logo-whatsapp' color="#fff" size={28} />
            </View>
            <Text style={styles.textWhatsapp}>25</Text>
            <View style={{ marginVertical: 18 }}>
                <Ionicons name='stop-circle' color="#fff" size={35} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 10,
        bottom: 330,
        height: 100,
        alignItems: "center"
    },
    avatar: {
        marginBottom: 5
    },
    heart: {
        marginVertical: 18,
        alignItems: "center"
    },
    textHeart: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "800"
    },
    chat: {
        alignItems: "center"
    },
    textChat: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "800"
    },
    bookmark: {
        alignItems: "center",
        marginVertical: 18
    },
    textBookmark: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "800"
    },
    whatsapp: {
        backgroundColor: "#67cb57",
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textWhatsapp: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "800"
    }
})