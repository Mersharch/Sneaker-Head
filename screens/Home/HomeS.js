import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    hContainer:{
        width:'100%',
        backgroundColor:'#f6f6f6',
        flex:1,
    },

    topIcons: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
    },

    catList: {
        marginTop: 20,
    },

    catView: {
        borderWidth: 1,
        borderColor: '#A8D2DC',
        borderRadius: 20,
        padding: 5,
        //paddingLeft: 10,
        marginRight: 25,
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:150

    },

    catviewSelected: {
        borderWidth: 0.5,
        borderColor: '#A8D2DC',
        borderRadius: 20,
        padding: 5,
        //paddingLeft: 10,
        marginRight: 25,
        alignItems: 'center',
        backgroundColor: "#ff8727",
        width:150


    },

    catItem: {
        color: '#A8D2DC',
        fontSize: 16,
        fontWeight: 'bold',
    },

    cattextSelected: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
}) 