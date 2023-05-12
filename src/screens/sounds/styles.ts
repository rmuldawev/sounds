import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        backgroundColor:'#a3ccf5',
        paddingHorizontal:12,
    },
    animals:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
    },
    text:{
        fontFamily:'Arial',
        fontWeight:'bold',
        fontSize:20,
        textAlign:"center",
        letterSpacing:1,
        color:'white',
        marginBottom:30
    },
})

export default styles