import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Inner from './screens/Inner';
import SignIn from './screens/SignIn';

export default function RootNavigation() {
  const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

  return (
  <NavigationContainer>
    <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={screenOptions} 
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Inner" component={Inner} />
        <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
