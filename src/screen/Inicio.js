import React from 'react'
import { View, FlatList } from 'react-native'
import { data } from '../data';
import CurrentVideo from '../component/CurrentVideo';


export default function Inicio() {
  
  return (
    <View style={{flex:1}}>
      <FlatList
      data={data}
      style={{flex:1}}
      renderItem={({ item }) =>
      <CurrentVideo url={item}  />
    }
      />
      </View>
  )
}