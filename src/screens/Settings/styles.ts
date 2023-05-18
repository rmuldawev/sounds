import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#a3ccf5',
        flex:1,
        paddingHorizontal:15
    },
    switch:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'space-between',
        // paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:6,
        marginBottom:10,
        paddingLeft:12,
        paddingRight:12
    },
    header:{
        fontSize:18,
        fontWeight:'400',
        color:'#CC0000',
        marginBottom:20
    },
    switch1:{
        backgroundColor:'#ffffff',
        paddingHorizontal:12,
        borderRadius:15,
        paddingVertical:10,
        marginBottom:10
    },
    mail: {
        marginTop:20
    },

    image:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text1:{
        marginLeft:3
    },
    mailImage:{
        flexDirection:'row',
        alignItems:'center'
    },
    mailText:{
        marginLeft:7
    }
})

export default styles