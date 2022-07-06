import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ProfileS'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {

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
      <View style={{width:'100%',flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, }}>
                
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <AntDesign name='left' size={25} color={'#000000'} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <View>
        {options.map(item => {
          return(
            <TouchableOpacity>
              <View>
              <MaterialIcons name={item.icon} size={24} color="#ff8727" />
                <Text>{item.name}</Text>
              </View>
              <AntDesign name='right' size={20} color={'#ff8727'} />
            </TouchableOpacity>
          )
        })}
      </View>

      <TouchableOpacity>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile