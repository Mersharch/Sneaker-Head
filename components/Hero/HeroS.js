import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    linearGradient: {
        width:'95%',
        alignSelf:'center',
        borderRadius:25,
        display:'flex',
        flexDirection:'row',
        marginTop:'5%',
        height:200,
    },

    heroContainer:{
        width:'50%',
        padding:10,
        height:'100%',
        justifyContent:'space-evenly',

    },

    subText: {
        fontSize:20,
        color:'lightgray',
        textAlign:'left',

    },

    title: {
        color:'#ffffff',
        fontSize:30,
        width:'75%',
        textAlign:'left',
        fontWeight: '800',
    },

    heroImage: {
        width:'100%',
        height:'80%',
        transform:[{scaleX:-1}, {translateX:5}],

        position:'relative',
        bottom:'-5%',
    },

    btn: {
        width:'100%',
        backgroundColor:'#ffffff',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },

    btnText: {
        fontSize:20,
        textAlign:'center',
    },
    
}) 