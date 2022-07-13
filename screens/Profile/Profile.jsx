import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from './ProfileS'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Profile = ({navigation}) => {

  const options = [
    {
      name: 'Account',
      icon: 'person'
    },
    {
      name: 'Notifications',
      icon: 'notifications-none'
    },
    {
      name: 'Privacy',
      icon: 'privacy-tip'
    },
    {
      name: 'Theme',
      icon: 'filter-list-alt'
    },
    {
      name: 'Help',
      icon: 'live-help'
    },
    {
      name: 'About',
      icon: 'info-outline'
    },

  ]
  return (
    <SafeAreaView>
      <View style={{width:'100%',flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, marginTop:40 }}>
                
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <AntDesign name='left' size={25} color={'#000000'} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        {options.map(item => {
          return(
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionInner}>
              <MaterialIcons name={item.icon} size={24} color="#ff8727" />
                <Text>{item.name}</Text>
              </View>
              <AntDesign name='right' size={20} color={'#ff8727'} />
            </TouchableOpacity>
          )
        })}
      </View>

      <TouchableOpacity onPress={() => {
        signOut(auth)
        .then(()=>{
          Alert.alert('LogOut', "LogOut")
          navigation.navigate('Login')
          }
        )
        .catch(err => Alert.alert("Error!", err))
      }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile