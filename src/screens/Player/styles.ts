import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#a3ccf5',
        // justifyContent:'space-between'
    },
    container:{
        alignItems:'center',
        paddingHorizontal:20,
    },
    trackImage:{
        height:300,
        width:200
    },
    albumImage:{
        height:400,
        width:'100%',
        backgroundColor:'#ffffff',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    textTitle:{
        fontSize:16,
        fontWeight:'500'
    },
    buttons:{
        width:'100%',
        backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50
        
    },
    image:{
        height:350,
        width:300,
        resizeMode:'contain'
    },
    nextTrack:{
        backgroundColor:'#ffffff',
        transform: [{rotate:'180deg'}],
        borderRadius:50,
    },
    prevTrack:{
        backgroundColor:'#ffffff',
        borderRadius:60,
    },
    stopBnt:{
        height:60,
        width:60,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles