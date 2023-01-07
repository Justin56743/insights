import React, { useState } from 'react';  
import { KeyboardAvoidingView, StyleSheet , View , Text } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';


const SignIn = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name , setName ] = useState('');
    const [ imageUrl, setImageUrl ] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name
                    })})
        .catch((error) => alert(error.message));

        };


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            
            <Text h3 style={{ marginBottom: 50 }}>
                Create a account
            </Text>

            <View stye={styles.inputContainer}>
                <Input
                placeholder='Name'
                autoFocus
                type='text'
                value={name}
                onChangeText={(text) => setName(text)} 
                />
                <Input
                placeholder='Email'
                autoFocus
                type='email'
                value={email}
                onChangeText={(text) => setEmail(text)} 
                />
                <Input
                placeholder='Password'
                secureTextEntry
                type='password'
                value={password}
                onChangeText={(text) => setPassword(text)} 
                />
                </View>
                <Button onPress={register} title='Register' />
                </KeyboardAvoidingView>
    );

};

export default SignIn;

const styles = StyleSheet.create({
    container: {},
});