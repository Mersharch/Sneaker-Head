import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    hcContainer:{
        width:'47%',
        backgroundColor:'white',
        height:300,
        paddingLeft:10,
        paddingTop:20,
        justifyContent:'space-between',
        borderRadius:20,
        marginHorizontal:5,
        marginBottom:15,
    },

    hcImage: {
        width:'95%',
        height:'50%', 
        transform:[{scaleX:-1}, {rotate:'35deg'}],
        resizeMode:'contain',
    },


    addBtn: {
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#000',
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        width:'30%',
        height:40,
        alignItems:'center',
        justifyContent:'center',

    },
}) 