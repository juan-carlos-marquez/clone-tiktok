import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import HeaderPerfil from '../component/HeaderPerfil'
import ProfilePicure from '../component/ProfilePicure'
import InfoTextProfile from '../component/InfoText'
import Separation from '../component/Separation'
import UserProfile from '../component/UserProfile'
import ButtonProfile from '../component/ButtonProfile'
export default function Perfil() {
  return (
    <View style={styles.conatiner}>
      <HeaderPerfil />
      <View style={styles.profile}>

        <ProfilePicure />

        <UserProfile user="@juancarlosmarquez578"/>

        <View style={styles.textProfiles}>

          <InfoTextProfile
            primaryText="4.5M"
            secondaryText="seguindo"
          />
          <Separation />

          <InfoTextProfile
            primaryText="10.1M"
            secondaryText="seguidores"
          />
          <Separation />

          <InfoTextProfile
            primaryText="10"
            secondaryText="Curtidas"
          />

        </View>
        <View style={styles.buttonsProfile}>
          <ButtonProfile
            text="Editar Perfil" />
          <ButtonProfile
            text="Adicionar amigos" />

        </View>
      </View>

      {/* Top Tabs Navigator */}

      <View style={styles.tabContainer}>
        <View style={{ borderBottomColor: "#000", borderBottomWidth: 1 }}>
          <Ionicons
            name="apps-sharp"
            size={25}
            color='#000' />
        </View>
        <View>
          <MaterialIcons
            name="lock-outline"
            size={25}
            color="#c2c2c2" />
        </View>
        <View>
          <Ionicons
            name="bookmark-outline"
            size={25}
            color="#c2c2c2" />
        </View>
        <View>
          <Ionicons
            name="heart-outline"
            size={25}
            color="#c2c2c2" />
        </View>
      </View>
      <View style={styles.centerView}>
        <Ionicons
          name="images-outline"
          size={40}
          color="#c2c2c2" />
        <Text style={styles.textCenter}>Compartilhe um vídeo de memória</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Carregar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#fff"
  },
  profile: {
    justifyContent: "center",
    alignItems: "center"
  }, textProfiles: {
    flexDirection: "row"
  },
  buttonsProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 240
  },
  tabContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderBottomColor: "#c2c2c2",
    borderBottomWidth: 1
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 220,
    paddingTop: 50
  },
  textCenter: {
    marginVertical: 10,
    fontWeight: "600"
  },
  button: {
    borderRadius: 2,
    backgroundColor: "#fd014e",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textButton: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 16
  }
})