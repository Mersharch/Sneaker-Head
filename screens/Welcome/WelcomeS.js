import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
  linearGradient: {
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },

  wpContainer: {
    flex:1,
    //width:'100%',
    //height:'100%',
    alignItems:'center',
    justifyContent:'center',
    //paddingTop:40,
  },

  lvp: {
    fontSize: 50,
    color:'#fff',
    width:270,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:130,
    
  },

  subText: {
    fontSize: 15,
    color:'#fff',
    width:270,
    textAlign:'center',
    fontWeight:'normal',
    marginTop:30,
    
  },


  imgW: {
    width:270,
    height:200,
    transform:[{ rotate: '35deg' }],
  },

  gsnArr: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
    top:100,
  },

  gs:{
    color:'white',
    fontSize:22,
  },
  
});