import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:12,
        backgroundColor:'#a3ccf5',
        flex:1,
        justifyContent:'space-between'
    },
    text1:{
        // backgroundColor:'red'
    },
    zagolovok1:{
        fontSize:17,
        fontWeight:'500',
        marginBottom:10,
        color:'#CC0000',
        letterSpacing:1.2,
        marginTop:5

    },
    main:{
        borderRadius:20,
        borderWidth:2,
        paddingVertical:15,
        paddingHorizontal:15,
        borderColor:'#ffffff',
        backgroundColor:'#ffffff'
    },
    logo:{
        height:150,
        width:350,
        alignSelf:'center',
        marginTop:25
    },
    mainText:{
        color:'#0099CC',
        fontSize:14,
        // textAlign:'justify',
    },
    faq:{
        alignSelf:'center',
        fontSize:22,
        color:'#003399'
    },
})

export default styles