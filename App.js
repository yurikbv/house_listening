import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

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
      <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: '#556'
          }}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({color}) => {
            let iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
            return (<Ionicons name={iconName} size={20} color={color}/>);
          }
        }}/>
        <Tab.Screen name="Settings" component={SettingsStack} options={{
          tabBarIcon: ({color}) => {
            let iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-settings`;
            return (<Ionicons name={iconName} size={20} color={color}/>)
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
