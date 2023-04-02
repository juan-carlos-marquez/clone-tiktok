import  React from 'react';
import { View, StyleSheet, Button, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import HeaderVideo from './HeaderVideo';
import SideVideos from './SideVideos';


export default function CurrentVideo({ url }) {
 
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: url,
        }}
        useNativeControls={false}
        resizeMode="cover"
        shouldPlay
        isLooping

      />
    <HeaderVideo/>

     <SideVideos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  video: {
    width: '100%',
    height: Dimensions.get("window").height,
  }
}); 