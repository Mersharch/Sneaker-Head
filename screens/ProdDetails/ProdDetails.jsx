import React from 'react'
import {  Text,   View, FlatList, TouchableOpacity, TouchableWithoutFeedback,  Image, Button, } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { sizes } from '../../assets/data';
import { styles } from './ProdDetailsS';


const ProdDetails = ({ navigation, route }) => {

    const item = route.params;

    const [sizeIndex, setsizeIndex] = useState(0);

    const [name, setName] = useState('hearto');

    const [color, setColor] = useState('black');

    const [imgIndex, setImgIndex] = useState(0);

    
    const wishClick = () => {
        if ( name  === 'hearto') {
            setName('heart');
            setColor('#DB5F39');
        }
        else if ( name  !== 'hearto') {
            setName('hearto');
            setColor('black');
        }
    };


  return (
    <View style={styles.pdView}>
        <StatusBar style='auto' />


        <View style={{flex:1.5, alignItems:'center', }}>
            <View style={{width:'100%',flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, }}>
                
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <AntDesign name='left' size={25} color={'#000000'} />
                </TouchableOpacity>
                
                
                <TouchableOpacity onPress={() => wishClick()}>
                    <AntDesign name={name} size={25} color={color} />
                </TouchableOpacity>   

            </View>
                
            <Image source={{uri: item.ProductImages[imgIndex]}} style={styles.img} />
        </View>

        <View style={styles.aiv}>
            <View style={styles.tpView}>
                <View>
                    <Text style={styles.title}>{item.ProductName}</Text>
                    <Text style={styles.subTxt}>{item.ProductSubText}</Text>
                </View>
                <Text style={styles.price}>{item.ProductPrice}</Text>
            </View>

            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',}}>
                <TouchableOpacity style={styles.imgSubViewSelected} onPress={()=> setImgIndex(0)}>
                    <View>
                        <Image source={{uri: item.ProductImages[0]}} style={styles.imgSub} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imgSubView} onPress={()=> setImgIndex(1)}>
                    <View>
                        <Image source={{uri: item.ProductImages[1]}} style={styles.imgSub} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imgSubView} onPress={()=> setImgIndex(2)}>
                    <View>
                        <Image source={{uri: item.ProductImages[2]}} style={styles.imgSub} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imgSubView} onPress={()=> setImgIndex(3)}>
                    <View>
                        <Image source={{uri: item.ProductImages[3]}} style={styles.imgSub} />
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
                <Text style={styles.textsizes}>Size</Text>
                <Button title='Size Guide' color={'#A8D2DC'} />
                </View>
                
                <FlatList 
                    data={sizes}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=> setsizeIndex(index)}>
                            <View style= {[styles.sizeView, sizeIndex == index && styles.sizeViewSelected,]}>
                            <Text style= {[styles.sizeItem, sizeIndex == index && styles.sizetextSelected,]} > {item.text} </Text>
                            </View>
                        </TouchableOpacity>
                    )} 
                    style= {styles.sizelist}
                />
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
                <Text style={{fontSize:25, fontWeight:'500', color:'#000000',}}>Description</Text>

                <TouchableOpacity>
                    <AntDesign name='down' size={25} color={'#000000'} />
                </TouchableOpacity>
            </View>



            <TouchableOpacity onPress={() => console.log('pressed')}>
                <View style={styles.atc}>
                    <AntDesign name='shoppingcart' color={'#ffffff'} size={23} />
                    <Text style={{fontSize:20, fontWeight:'700', color:'#ffffff', paddingHorizontal:10}}>Add To Cart</Text>
                </View>
            </TouchableOpacity>
                
        </View>
             
            

    </View>
  )
}

export default ProdDetails