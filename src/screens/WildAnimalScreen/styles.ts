import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
          backgroundColor: '#a3ccf5',
          paddingHorizontal:15,
          flexGrow: 1 ,
    },
    item:{
        height:160,
        width:'48%',
        backgroundColor:'#ffffff',
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:15,
    },
    image:{
        height: 130, 
        width: 130, 
        alignSelf: 'center',
        resizeMode:'contain',

    },
    images:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    text:{
        fontFamily:'Arial',
        fontWeight:'bold',
        fontSize:20,
        textAlign:"center",
        letterSpacing:1,
        color:'white',
        marginBottom:20
    },
    backIcon:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    backText:{
        fontSize:16,
        color:'#ffffff',
        marginLeft:5,
        fontWeight:'400'
    },
})

export default styles