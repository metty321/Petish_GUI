import React from "react";
import { StyleSheet,useWindowDimensions,View,Text } from "react-native";

const Vets = () =>{
    
    return(
<View style={styles.root}>
        <Text style={styles.pageTitle}>Vets</Text>
        <Text style={styles.soon}>Coming Soon!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20
    },

    pageTitle:{
        textAlign:'center',
        marginTop:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },

    soon: {
        textAlign:'center',
        top: "35%",
        fontFamily:'SuezOne-Regular',
        fontSize:40,
        color:'#5E2D14'
    }
   
   })

export default Vets;