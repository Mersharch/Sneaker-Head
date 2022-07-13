import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, Keyboard, Alert} from 'react-native'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { styles } from './SignUpFormS'

const SignUpForm = ({navigation, person, setPerson }) => {

  const [cpassword, setCpassword] = useState('');


  const SIgnUp = ()=> {
    createUserWithEmailAndPassword(auth, person.email, person.password)
    .then((userCredentials) => {
      updateProfile(auth.currentUser, { displayName: person.name })
      .then(() => {
        console.log('signed up and updated')

        const user = userCredentials.user

        console.log(user)

        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      })

      navigation.navigate('HomeTabs');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      console.log(`${errorCode} error: ${errorMessage}`);
    });
  
  };
  

  const handleChange = (text, input) => {
    setPerson(prev => ({...prev, [input] : text}));
  };


  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!person.name) {
      valid = false;
      Alert.alert('Type a name');
    } else {
      valid = true;
      if (!person.email) {
        valid = false;
        Alert.alert('Type an email')
      } else if (!person.email.match(/\S+@\S+\.\S+/)){
        valid = false;
        Alert.alert('invalid email format')
      } else {
        valid = true;
        if (!person.password){
          valid = false;
          Alert.alert('Type a password')
        }else if (person.password !== cpassword) {
          valid = false
          Alert.alert('passwords dont match')
        } else {
          valid = true;
        }
      }
      
    }

    

    if (valid) {
      SIgnUp()

    }
  };
  return (
      <View style={styles.sfContainer}>
        <View style={styles.sfInputs}>
            <TextInput 
              style={styles.fnlInput} 
              placeholder='Full Name'
              value={person.name}
              onChangeText={text => handleChange(text, 'name')}
            />
            
          
          <TextInput 
            style={styles.pwInput} 
            placeholder='Email...'
            value={person.email}
            onChangeText={text => handleChange(text, 'email')}
            
          />
          <TextInput 
            style={styles.pwInput} 
            secureTextEntry={true} 
            placeholder='Password...'
            value={person.password}
            onChangeText={text => handleChange(text, 'password')}
          />
          <TextInput 
            style={styles.pwInput} 
            secureTextEntry={true} 
            placeholder='Confirm Password'
            onChangeText={text => setCpassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={validate}>
            <Text style={styles.btnT}>Sign Up</Text>
          </TouchableOpacity>
      </View>
  )
}

export default SignUpForm