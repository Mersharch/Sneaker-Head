import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    pdView: {
        paddingTop: '20%',
        backgroundColor: '#f6f6f6',
        flex: 1,

    },

    aiv: {
        marginTop: -10,
        flexDirection:'column',
        justifyContent:'space-around',
        flex: 3,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor:'white',
        paddingHorizontal:10,
    },
   
    img: {
        width: '70%',
        height: '70%',
        borderRadius: 60,
        marginTop:5,
        resizeMode:'contain',
    },

    imgSub: {
        width:50,
        height: 50,
        resizeMode:'contain',
    },

    imgSubView: {
        flex:1,
        height: 60,
        marginHorizontal:5,
        backgroundColor:'#f6f6f6',
        //borderWidth:1.5,
        //borderColor:'#A8D2DC',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,

    },

    imgSubViewSelected: {
        flex:1,
        height: 60,
        marginHorizontal:5,
        backgroundColor:'#f6f6f6',
        borderWidth:2,
        borderColor:'#ff8727',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,

    },

    tpView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: '10%',
    },

    title: {
        fontSize: 26,
        fontWeight:'500',
    },

    subTxt: {
        color:'#A8D2DC',
        fontSize:18,
        marginTop:10,
    },

    price: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    about: {
        fontSize: 17,
        marginTop:'3%',
    },

    textsizes: {
        fontSize: 25,
        fontWeight: '500',
    },

    sizelist: {
        marginTop: 10,
    },

    sizeView: {
        //borderWidth: 0.5,
        //borderColor: '#A8D2DC',
        backgroundColor:'#f6f6f6',
        borderRadius: 10,
        padding: 5,
        marginRight: 25,
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,

    },

    sizeViewSelected: {
        //borderWidth: 0.5,
        //borderColor: '#A8D2DC',
        borderRadius: 10,
        padding:5,
        marginRight: 25,
        backgroundColor: '#ff8727',

    },

    sizeItem: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'normal',
        alignSelf:'center',
    },

    sizetextSelected: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
    },

    atc: {
        //borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#ff8727',
        borderRadius: 20,
        //borderColor: 'dodgerblue',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom:'5%',
        paddingHorizontal:'20%',
        padding: 10,
        alignSelf:'center',
        flexDirection:'row'
    },
    


    
}
);