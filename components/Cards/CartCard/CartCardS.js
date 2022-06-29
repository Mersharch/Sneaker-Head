import { StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    ccContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20,
        marginBottom:20
    },

    checkBox: {
        padding:0,
        alignItems:'center',
        justifyContent:'center'
    },

    middle: {
        width:90,
        height:90,
        backgroundColor:'#f6f6f6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    },

    img: {
        width:80,
        height:80,
        resizeMode:'contain'
    },

    end: {
        width:'60%',
        paddingLeft:20,
        alignItems:'left',
        

    },

    ttop: {
        height:'50%'
    },

    addQty: {
        backgroundColor:'#ff8727',
        width:25,
        height:25,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    
    subQty: {
        borderWidth:1,
        borderColor:'#ff8727',
        width:25,
        height:25,
        borderRadius:5
    },
    
})