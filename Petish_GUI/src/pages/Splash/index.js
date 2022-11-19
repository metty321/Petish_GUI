import React, { useEffect } from "react";
import { StyleSheet,useWindowDimensions,View,Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Splash =({navigation}) =>{
    const {width,height} = useWindowDimensions();
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login');
        },2000)
    })

    return(
        <LinearGradient
            colors={['rgba(240, 199, 164, 1)', 'rgba(240, 199, 164, 0)']} 
            style={styles.linearGradient}>
                <View style={[styles.container,{width : width * 0.7}]}>
            <Text style={styles.hello_txt}>Hello</Text>
            <Text style={styles.User_txt}>Stipeng Septiteng!</Text>
            <Text style={styles.wlcm_txt}>Welcome to Petish</Text>
            </View>
         </LinearGradient>
    )

}

const styles = StyleSheet.create({
    linearGradient:{
        flex:1,
        alignItems:'center'
    },
    hello_txt:{
        fontFamily:'Calligraffitti-Regular',
        alignSelf:'flex-start',
        fontSize: RFPercentage(3)
    },
    User_txt:{
        fontFamily:'SuezOne-Regular',
        alignSelf:'center',
        fontSize: RFPercentage(5),
        color:'rgba(94, 45, 20, 1)'
    },
    wlcm_txt:{
        fontFamily:'Calligraffitti-Regular',
        alignSelf:'flex-end',
        fontSize: RFPercentage(3)
    },
    container:{
        marginTop:'20%',
        paddingHorizontal:12
    }

})

export default Splash;