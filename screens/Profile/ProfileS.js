import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    options: {
        marginTop:40,
    },

    option: {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        justifyContent:'space-between',
        marginVertical:20,
    },

    optionInner: {
        flexDirection:'row',
        alignItems:'center',
    },

    optionText: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10,
    },
})