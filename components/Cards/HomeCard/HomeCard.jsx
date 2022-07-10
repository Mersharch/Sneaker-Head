import { styles } from "./HomeCardS";
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native'





const HomeCard = (props) => {

    const item = props.item;
    const navigation = props.navigation;
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate('ProdDetails', item)}>
        <View style={styles.hcContainer}>
            <Image
            style={styles.hcImage}
            source={{uri: item.ProductImages[0]}} 
            />

            <View style={{height:'50%', justifyContent:'space-between', paddingTop:25,}}>
                <Text style={{fontSize:14, color:'lightgray', textAlign:'left',}}>{item.ProductGender}</Text>
                <Text style={{fontSize:20, textAlign:'left', fontWeight:'800',}}>{item.ProductName}</Text>

                <View style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center',}}>
                    <Text style={{fontSize:20, textAlign:'left', fontWeight:'600',}}>{'\u0024'}{item.ProductPrice.toFixed(2)}</Text>
                    <View style={styles.addBtn}>
                        <Text style={{fontSize:35, color:'white',}}>+</Text>
                    </View>
                </View>
            </View>

        </View>
    </TouchableWithoutFeedback>
  )
}

export default HomeCard