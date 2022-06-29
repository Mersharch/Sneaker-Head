import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './CartCardS'
import { CheckBox } from '@rneui/themed'

const CartCard = ({selected, setSelected}) => {

    const [checked, setChecked]= useState(false)

    const [qty, setQty] = useState(0);

    function addqty () {
        setQty(qty+1);
    };

    function subqty () {
        setQty(Math.max(0,qty-1));
    };

  return (
    <View style={styles.ccContainer}>
        <CheckBox 
            containerStyle={styles.checkBox}
            size={31}
            checked={checked}
            checkedColor={'#ff8727'}
            uncheckedColor={'black'}
            onPress={() =>  {
                setChecked(!checked);
                if (checked) {
                    setSelected(selected - 1)
                } else {
                    setSelected(selected + 1)
                }
            }}
        />

        <View style={styles.middle}>
            <Image 
                source={{uri:'https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} 
                style={styles.img} 
            />
        </View>

        <View  style={styles.end}>
            <View style={styles.ttop}>
                <Text style={{color:'#000000', fontSize:16, fontWeight:'700'}}>LeBron Witness 5</Text>
                <Text style={{color:'#D5E6E2', fontSize:16, fontWeight:'700', marginTop:10}}>Size 42</Text>
            </View>

            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', }}>
                <Text style={{color:'#000000', fontSize:23, fontWeight:'700'}}>$171.88</Text>
                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity style={styles.subQty} onPress={() => subqty()}>
                        <Text style={{color:'#ff8727', fontSize:20, textAlign:'center'}}>-</Text>
                    </TouchableOpacity>

                    <Text style={{width:25, height:25, textAlign:'center', fontSize:20, marginHorizontal:5}}>{qty}</Text>

                    <TouchableOpacity style={styles.addQty} onPress={() => addqty()}>
                        <Text style={{color:'#ffffff', fontSize:20, textAlign:'center'}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    </View>
  )
}

export default CartCard