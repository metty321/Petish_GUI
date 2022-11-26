import React from "react";
import { StyleSheet,useWindowDimensions,View,Text } from "react-native";

const Food = () =>{
    
    return(
<View style={styles.root}>
        <Text style={styles.pageTitle}>Food</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20
    },

    pageTitle:{
        textAlign:'left',
        marginTop:20,   
        marginLeft:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    }
   
   })

export default Food;