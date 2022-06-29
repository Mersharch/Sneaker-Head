import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    sfContainer: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginBottom:'10%',

    },

    sfInputs: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        marginTop: '1%',
        alignItems: 'center',
        //backgroundColor:'blue',
        padding:5,

    },

    

    fnlInput: {
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        width: '100%',
        fontSize: 20,
        padding: 10,
        color: '#000',
    },

    unInput: {
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        width: '100%',
        fontSize: 20,
        padding: 10,
        color: '#000',
        marginTop:'5%',
    },
  
    pwInput: {
        marginTop: '5%',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        width: '100%',
        fontSize: 20,
        padding: 10,
        color: '#000',
    },

    btnT: {
        fontSize:25,
        color:'white',
      },
  
      btn: {
        marginTop:'20%',
        width:250,
        borderWidth:2,
        borderColor:'orange',
        padding:5,
        backgroundColor:'orange',
        borderRadius:25,
        alignItems:'center'
      },
})