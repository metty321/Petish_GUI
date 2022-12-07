import React from "react";
import { StyleSheet,useWindowDimensions,View,Text,Image } from "react-native";
import Logo from '../../../assets/img/Logo.png'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";

//nanti bakal pake useEffect() buat render screen sesuai dengan input user
//referensi     : https://stackoverflow.com/questions/45478621/react-native-styling-with-conditional

// const onAddPressed=(navigat)=>{
    
//     alert('Button Pressed!');
    
// }

const Pet_Profile = ({ navigation }) =>{
    const {width,height} = useWindowDimensions();
    
    return(

        // <Text>Pet Profile</Text>
        <View style={styles.root}>
        <Text style={styles.pageTitle}>My Pets</Text>
        
        <View style={[styles.AddPetContainer,{width : width * 0.7}]}>
        
            <View style={styles.AddPet}>
            <Pressable  onPress={()=> navigation.navigate('AddPets')}>
            <Text style={styles.addNow}>+</Text>
            </Pressable>
            </View>
        
        <Text style={styles.addPet_Text}>Add your pet now!</Text>
        </View>
      <Image source={Logo} style={[styles.Logo,{height : height * 0.3}]} resizeMode= 'contain'/>
        </View>
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20,
    },

    addPet_Text:{
        alignSelf:'center',
        fontFamily:'SuezOne-Regular',
        color:'#5E2D14',
        fontSize:18
    },

    AddPetContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:30,
        top: "10%",
        right: "3%"
     },

    Logo:{
        zIndex:0,
        alignSelf:'center',
        bottom: "5%",
        width:'70%',
        height:100,
        maxHeight:1000,
        maxWidth:2000,
        marginTop:'30%',
        opacity:0.4
    },

    addNow:{
        textAlign:'center',
        top: -2,
        fontSize:30,
        color:'white',
        fontFamily:'SuezOne-Regular'
    },

    pageTitle:{
        textAlign:'center',
        marginTop:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },
    AddPet:{
        width: 50,
    height: 50,
    borderRadius: 50/ 2,
    backgroundColor: 'rgba(145, 111, 94, 1)',
    justifyContent:'center',
    alignContent:'center'
    }
   
   })

export default Pet_Profile;