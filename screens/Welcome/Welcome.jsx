import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './WelcomeS'
import { AntDesign } from '@expo/vector-icons';


const Welcome = ({navigation}) => {
  return (
    <LinearGradient
    style={styles.linearGradient}
    colors={["#272320", "#DB5F39"]}
    locations={[0.6, 0.9]}
    >
        <SafeAreaView style={styles.wpContainer}>
            <StatusBar style='auto'/>
            <View>
                <Image 
                source={require('../../assets/drawn-airforce.png')} 
                style={styles.imgW} />
                <Text style={styles.lvp}>
                    LIVE YOUR PERFECT
                </Text>
                <Text style={styles.subText}>
                    Smart, gorgeous and fashionable collection makes you cool
                </Text>

                <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
                    <View style={styles.gsnArr}>
                    <AntDesign name="up" size={22} color="white" />
                        <Text style={styles.gs}>
                            Get Started
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    </LinearGradient>
  )
}

export default Welcome;


