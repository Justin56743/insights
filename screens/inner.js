import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const inner = () => {

  
  return (
    <View style={styles.container}>
      <View style={styles.inputField }>
        <TextInput
        placeholder='Enter your email'
        placeholderTextColor='#999999'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        
        autofocus={true}
        />
      </View>
      

      <View style={styles.inputField}>
        <TextInput
        placeholder='Enter your password'
        placeholderTextColor='#999999'
        autoCapitalize='true'
        textContentType='password'
        
        autofocus={true}
        secureTextEntry={true}
        
        />
      </View>
      <Button  title='Log In'  />
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



export default inner