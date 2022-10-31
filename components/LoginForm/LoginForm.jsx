import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, Button, Keyboard, Alert, Pressable} from 'react-native'
import { styles } from './LoginFormS'
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigation.navigate('HomeTabs');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(`${errorCode} error: ${errorMessage}`);
    Alert.alert('Incorrect Credentials or Network Error')

  });
  }

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!email) {
      valid = false;
      Alert.alert('Type an email')
    } else if (!email.match(/\S+@\S+\.\S+/)){
      valid = false;
      Alert.alert('invalid email format')
    } else {
      valid = true;
      if (!password){
        valid = false;
        Alert.alert('Type a password')
      }else if (password.length < 6) {
        valid = false
        Alert.alert('Password must be at least 6 characters')
      } else {
        valid = true;
      }
    }

    if (valid) {
      SignIn();
    }
  }


  return (
      <View style={styles.lfContainer}>
          <TextInput 
            style={styles.unInput} 
            placeholder='Email...' 
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput 
            secureTextEntry={true} 
            style={styles.pwInput} 
            placeholder='Password...' 
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.fpb}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=> validate()}>
            <Text style={styles.btnT}>Log In</Text>
          </TouchableOpacity>

         

      </View>
  )
}

export default LoginForm