import React,{useEffect,useState} from "react";
import { StyleSheet,useWindowDimensions,View,Text,
Image, Pressable } from "react-native";
import account from '../../../assets/img/account.png'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";




const UserProfile = ({navigation}) =>{
const [name, setName] = useState('')
const [email, setEmail] = useState('')



    
const user= axios.create({
    baseURL:'https://petish-back.onrender.com/petish',
    // headers:{
    //   'Authorization':"Bearer "+token
    // }
  })

  useEffect(()=>{
    async function getItem(){
      const value = await AsyncStorage.getItem("AccessToken");
      // console.log(pet_id)
      user.get("/me",
      {headers: {'Authorization':"Bearer "+value}})
          .then(res => {
            console.log("res Profile: ",res.data.data)
            setName(res.data.data.name)
            setEmail(res.data.data.email)
          })
     
    }
    getItem();
  }, []) 

  const LogOutPressed = async()=>{
    await AsyncStorage.removeItem('AccessToken')
    .then(res=>{
        console.log(res)
        navigation.navigate("Login")
    })
  }
    
    return(
        <View style={styles.root}>
            <Text style={styles.pageTitle}>Profile</Text>
            <View style={styles.userInfo_Container}>
            
             <Text style={styles.usernameText}>{name}</Text>
            <Pressable
                style={styles.logOutPressable}
                onPress={LogOutPressed}
            >
                <Text style={styles.logOutText}>Log Out</Text>
            </Pressable>
            <Text style={styles.emailText}>{email}</Text>
            <Image
                style={styles.ellipseIcon1}
                resizeMode="cover"
                source={require("../../../assets/img/ellipse-25.png")}
            />
            <Pressable
                style={styles.borderColorPressable}
                onPress={() => navigation.navigate("editUserProfile")}
            >
                <Image
                style={styles.icon4}
                resizeMode="contain"
                source={require("../../../assets/img/border-color.png")}
                />
            </Pressable>
            <Image
                style={styles.image3Icon}
                resizeMode="cover"
                source={require("../../../assets/img/image-3.png")}
            />
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
    },

    usernameText: {
        position: "absolute",
        top: 80,
        left: 150,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    logOutText: {
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#d12c2c",
        textAlign: "left",
        top: -120
    },
    logOutPressable: {
        position: "absolute",
        left: 255,
        top: 311,
    },
    emailText: {
        position: "absolute",
        top: 110,
        left: 150,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.3)",
        textAlign: "left",
    },

    ellipseIcon1: {
        position: "absolute",
        top: 55,
        left: 35,
        width: 103,
        height: 103,
    },
    icon4: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    borderColorPressable: {
        left: 288,
        top: 102,
        width: "20.09%",
        height: "20.58%",
    },
    image3Icon: {
        position: "absolute",
        top: 73,
        left: 62,
        width: 50,
        height: 61.3,
    },
   
   })


export default UserProfile;
