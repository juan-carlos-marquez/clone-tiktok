import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

export default function MessageText({backgroundColor,primaryText,secondaryText,icon }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentLeft}>
                <View style={[styles.icon, {backgroundColor}]}>
                    {
                        icon !== "archive"?
                        <Ionicons name={icon} color="#fff" size={30} />
                        :
                        <MaterialCommunityIcons name={icon} color="#fff" size={30} />

                    }
                </View>
                <View>
                    <Text style={styles.textPrimary}>{primaryText}</Text>
                    <Text style={styles.textSecondary}>{secondaryText}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.arrow}>
                <Ionicons name='chevron-forward' color="#000" size={30} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderTopColor: "#C2C2C2",
        borderTopWidth: 1
    },
    contentLeft: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    },
    icon: {
        marginRight: 5,
        width: 50,
        height: 50,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: "center"
    },
    textPrimary: {
        fontWeight: "600"
    },
    textSecondary: {
        color: "#c2c2c2"
    },
    arrow: {
        justifyContent: "center",
        alignItems: "center"
    }

})
