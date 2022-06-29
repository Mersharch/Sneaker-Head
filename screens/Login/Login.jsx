import React, { useState } from 'react'
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './LoginS';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const Login = ({navigation}) => {

  const [rlogin, setRLogin] = useState(true);
  const [person, setPerson] = useState({
    'name': '' ,
    'email': '',
    'password': ''
  })


  return (
      <SafeAreaView style={styles.lpContainer}>

        <View style={styles.lns}>
          <TouchableOpacity onPress={()=> setRLogin(true)}>
            <Text style={[styles.stopText, rlogin == false && styles.topText,]}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> setRLogin(false)}>
            <Text style={[styles.topText, rlogin == false && styles.stopText,]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lnsContent}>

          { rlogin ? 
          <LoginForm 
            navigation={navigation}
          /> : 
          <SignUpForm 
            navigation={navigation}
            person={person}
            setPerson={setPerson}
          />}

        </View>

      </SafeAreaView>
  )
}

export default Login;