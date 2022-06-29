import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './HeroS'
import { LinearGradient } from 'expo-linear-gradient'



const Hero = () => {
  return (
    <LinearGradient
    style={styles.linearGradient}
    colors={["#272320", "#DB5F39"]}
    locations={[0.4, 0.8]}
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 0}}
    >
        <View style={styles.heroContainer}>
            <Text style={styles.subText}>Just Dropped</Text>
            <Text style={styles.title}>Nike Air Max 90</Text>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Shop Now</Text>
            </TouchableOpacity>
        </View>

        <Image
        style={styles.heroImage}
        source={require('../../assets/drawn-airforce.png')}
        />

    </LinearGradient>
  )
}

export default Hero