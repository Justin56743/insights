import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { auth } from '../firebase';


const Inner = ( { navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        navigation.replace('Inner');
    }})
    return unsubscribe;
  }, []);
  const signIn= () => {};
  return (
    <View style={styles.container}>
      <View style={styles.inputField }>
        <TextInput
        placeholder='Enter your email'
        placeholderTextColor='#999999'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        value={email}
        onChangeText={(text) => setEmail(text)}
        
        autofocus={true}
        />
      </View>
      

      <View style={styles.inputField}>
        <TextInput
        placeholder='Enter your password'
        placeholderTextColor='#999999'
        autoCapitalize='true'
        textContentType='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        
        autofocus={true}
        secureTextEntry={true}
        
        />
      </View>
      <Button   title='Log In'  />
      <Button title='Sign Up'  type="outline" onPress={ () => navigation.navigate('SignIn')} />
    </View>

    
    

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  
  input: {
    width: '100%',
    backgroundColor: 'black',
    borderEndColor: 'black',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 20,
  },
  Button: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderRadius: 6,
    alignItems: 'center',
  },


    
  })



export default Inner