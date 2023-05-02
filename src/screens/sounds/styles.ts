import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#a3ccf5',
        paddingHorizontal:12,
    },
    animals:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{
        fontFamily:'Arial',
        fontWeight:'bold',
        fontSize:20,
        textAlign:"center",
        letterSpacing:1,
        color:'white',
        marginBottom:10
    },
})

export default styles