// In App.js in a new project

import * as React from 'react';
import {MaterialCommunityIcons,Octicons  } from "@expo/vector-icons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from '../screen/Inicio';
import Perfil from '../screen/Perfil';
import IconAdd from '../component/IconNew';
import Message from '../screen/Message';
import AddNow from '../screen/AddNow';
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:"#fff",
            tabBarInactiveTintColor:"#c2c2c2",
            headerShown:false,
            statusBarColor:'white',
            tabBarStyle:{
                backgroundColor:"#000"
            }
           
          }}>
            <Tab.Screen name="Inicio" component={Inicio}
             options={{ tabBarIcon: ({color, size}) => <MaterialCommunityIcons  name="home" color={color} size={30}/>}}/>
            <Tab.Screen name="Amigos" component={Inicio}
             options={{ tabBarIcon: ({color, size}) => <Octicons  name="people" color={color} size={20}/>}}/>
            <Tab.Screen name=" " component={AddNow}
             options={{ tabBarIcon: ({color, size}) => <IconAdd/>}}/>

            <Tab.Screen name="Caixa de entrada" component={Message} 
            options={{ tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="message-minus-outline" color={color}  size={20}/>}}/>
            <Tab.Screen name="Perfil" component={Perfil} 
            options={{ tabBarIcon: ({color, size}) => <Octicons name={color==="#fff"?"person-fill":"person"} color={color}  size={20}/>}}/>
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function Navigation() {
    return (

        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            statusBarColor:'white'
          }}
        >
            <Stack.Screen name="HomeScreen" component={MyTabs} />
        </Stack.Navigator>

    );
}

export default Navigation;