import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    lpContainer: {
        flex: 1,
        //alignItems:'center',
        justifyContent:'center',
        marginBottom:'10%',

        
    },

    lns: {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:"-25%",
        marginBottom:"20%",
    },

    topText: {
        fontSize:25,
        color:'#ffd280',
        fontWeight: '500',
    },

    stopText: {
        fontSize:25,
        color:'orange',
        fontWeight: '600',
    },

    lnsContent: {
        alignItems:'center',
        justifyContent:'center',

        
    },
});