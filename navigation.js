import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import inner from './screens/inner';
;
export default function RootNavigation() {
  const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

  return (
  <NavigationContainer>
    <Stack.Navigator 
        initialRouteName='Homescreen'
        screenOptions={screenOptions} 
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="inner" component={inner} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
