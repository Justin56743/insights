import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
export const HomeScreen = ({ navigation }) => { 
  return (  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress ={ () => navigation.navigate('Inner')}><Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>Welcome to React Native!</Text></TouchableOpacity>
    <Text style={{ textAlign: 'center', color: '#333333', marginBottom: 5 }}>To get started press the Welcome  button</Text>
  </View>
  )

  }
export default HomeScreen