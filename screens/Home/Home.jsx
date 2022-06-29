import React, { useState }  from 'react';
import { SafeAreaView, View, Text, FlatList,TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import { styles } from './HomeS'
import { Feather } from '@expo/vector-icons';
import Hero from '../../components/Hero/Hero';
import { categories, Products } from '../../assets/data';
import HomeCard from '../../components/Cards/HomeCard/HomeCard';



const Home = ({ navigation }) => {

  const [catIndex, setCatIndex] = useState(0);

  return (
    <SafeAreaView style={styles.hContainer}>
      <View style={styles.topIcons}>
        <TouchableOpacity>
          <Feather name="align-left" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Hero/>

        <View style={{marginTop:'5%'}}> 
          <FlatList 
            data={categories}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item, index }) => (
              <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=> setCatIndex(index)}>
                <View style= {[styles.catView, catIndex == index && styles.catviewSelected,]}>
                  <View style={{borderRadius:50,backgroundColor:'#eaD2DC', padding:3}}>
                    <Image
                    style={{width:35, height:35,}}
                    source={require('../../assets/kisspng-air-force-sneakers-air-jordan-nike-shoe-force-vector-5ad96b1737c599.2356844015241981672285.png')}
                    />
                  </View>
                  <Text style= {[styles.catItem, catIndex == index && styles.cattextSelected,]} > {item.text} </Text>
                </View>
              </TouchableOpacity>
            )} 
            style= {styles.catList}
          />
        </View>

        <View style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center', padding:10, marginTop:'5%',}}>
          <Text style={{fontSize:30,fontWeight:'600'}}>New Men's</Text>
          <Button title='See all'  color={'#A8D2DC'} />
        </View>

        <View style={{flex:1, marginTop:1, justifyContent:'space-between', alignItems:'center'}}>
          <FlatList
            data={Products}
            numColumns='2'
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <HomeCaurd item={item} navigation={navigation} />
            )}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home