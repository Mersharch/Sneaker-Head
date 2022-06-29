import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './CartS'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CartCard from '../../components/Cards/CartCard/CartCard';


const Cart = ({ navigation }) => {

    const [selected, setSelected] = useState(0);


    

  return (
    <SafeAreaView style={styles.bg}>
        <View style={styles.first}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{color:'#000000', fontSize:25, fontWeight:'500'}}>Cart</Text>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={30} color="black" />
            </TouchableOpacity>
        </View>

        <ScrollView>
        <View style={{flex:4}}>
            <CartCard selected={selected} setSelected={setSelected} />
            <CartCard selected={selected} setSelected={setSelected} />
            <CartCard selected={selected} setSelected={setSelected} />
            <CartCard selected={selected} setSelected={setSelected} />
            <CartCard selected={selected} setSelected={setSelected} />
            <CartCard selected={selected} setSelected={setSelected} />
            <CartCard selected={selected} setSelected={setSelected} />
        </View>

        <View style={{alignItems:'center'}}>
            <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20,}}>
                <Text style={{fontSize:25, fontWeight:'500'}}>Selected ({selected})</Text>
                <Text style={{fontSize:25, fontWeight:'500'}}>$171.88</Text>
            </View>

            <TouchableOpacity style={styles.cBtn} onPress={()=> navigation.navigate('Payment')}>
                <Text style={{textAlign:'center', fontSize:30, color:'#ffffff', fontWeight:'500'}}>Checkout</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default Cart