import React from "react";
import { StyleSheet,useWindowDimensions,View,Text,
Image } from "react-native";
import account from '../../../assets/img/account.png'



const UserProfile = () =>{
    
    return(
<View style={styles.root}>
        <Text style={styles.pageTitle}>Profile</Text>
        <View style={styles.userInfo_Container}>
        
            <Image source={account} style={styles.img} resizeMode="contain"/>

        </View>
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


export default UserProfile;