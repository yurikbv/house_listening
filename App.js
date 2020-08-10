import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "./Screens/Home";
import Detail from "./Screens/Detail";
import Settings from "./Screens/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Awesome app'}}/>
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
  )
}

function SettingsStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} options={{title: "Settings"}}/>
      </Stack.Navigator>
  )
}

function AppNavigator() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
