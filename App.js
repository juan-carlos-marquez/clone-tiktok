import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigation />

    </NavigationContainer>

  );
}


