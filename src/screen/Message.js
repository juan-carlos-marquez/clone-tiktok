import React from 'react'
import { View } from 'react-native'
import HeaderMessage from '../component/HeaderMessage'
import MessageText from '../component/MessageText'

export default function Message() {
  return (
    <View style={{ backgroundColor: "#fff", paddingTop:10 }}>
      <HeaderMessage />

      <MessageText
        backgroundColor="#479bd8"
        primaryText="Novos seguidores"
        secondaryText="As mensagens de seguidores serão exibidas..."
        icon="people"
      />

      <MessageText
        backgroundColor="red"
        primaryText="Atividades"
        secondaryText="Fulano curtiu seu comentario."
        icon="notifications"
      />
      <MessageText
        backgroundColor="#000"
        primaryText="Notificações do sistema"
        secondaryText="Tiktok: #MaisQueUma"
        icon="archive"
      />


    </View>
  )
}