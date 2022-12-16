import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from "react-native-linear-gradient";
import CustomInput from '../../components/CustomInput';
import {
   StyleSheet,
   Text,
   View,
   Pressable,
   TouchableOpacity,
   Image
 } from 'react-native';

 import { ReactDOM } from 'react';

 import AsyncStorage from '@react-native-async-storage/async-storage';
 import axios from "axios";

//  import {login, reset} from '../../features/auth/authSlice'
//  const dispatch = useDispatch();
 const Login = ({ navigation }) => {
   

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   useEffect(async()=>{
    const _sessionValidation = async()=>{
      const isLogin = await AsyncStorage.getItem('AccessToken')
      if(isLogin){
        navigation.navigate('MainApp')
      } 
    }
    _sessionValidation()
   },[])


   //buat fungsi buat mengolah input dan mengirimkannya ke database
 const onLoginPressed = async() =>{
  const data = {
    email,
    password
  }    

  axios.post('https://petish-back.onrender.com/petish/login',data)
  .then(res => {
    alert('Login successful')
    // console.log('res: ',res.data.user.token);
    AsyncStorage.setItem("AccessToken",res.data.user.token)
    setEmail("");
    setPassword("");
    navigation.navigate("MainApp")
  }).catch(err=>console.log(err.message))


  // const storeData = async (data) => {
  //   try {
  //     const jsonValue = JSON.stringify(data)
  //     await AsyncStorage.setItem('@storage_Key', jsonValue)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  
};


   return (
     
     <View style={styles.container}>
      <Image
          style={styles.e4e22bf7791293d3a1e53fHomeGrIcon}
          resizeMode="cover"
          source={require("../../../assets/img/61e4e22bf7791293d3a1e53f-homegradientsectionimage1-1.png")}
        />

      <LinearGradient
        style={styles.rectangleLinearGradient}
        locations={[0.77, 1]}
        colors={["#906e5d", "rgba(150, 119, 102, 0)"]}
        useAngle={true}
        angle={180}
      />

      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../../../assets/img/vector1.png")}
        />
      </Pressable>

      <Text style={styles.text}>Sign In</Text>
      
      <View style={styles.registerForm}>
      
        <CustomInput label='Email' placeholder='Your Email' setValue={setEmail}/>
        {/* <CustomInput label='Phone Number' placeholder='Your Phone Number' setValue={setPhoneNumber}/> */}
        <CustomInput 
        label='Password' 
        placeholder='Your Password' 
        setValue={setPassword} 
        hidePasssword='true'
        />
        
        <Pressable  onPress={onLoginPressed} style={styles.Register_btn}>
          <TouchableOpacity>
            <Text style={styles.btn_label}>Submit</Text>
          </TouchableOpacity>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Register')}>
          <Text style={styles.link_to_register}>Don't have an account?</Text>
        </Pressable>
      </View>
     </View>
   );
};

const styles = StyleSheet.create({
 container:{
   // alignItems:'center',
    paddingVertical:20,
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden"
 },

 e4e22bf7791293d3a1e53fHomeGrIcon: {
    top: -80,
    left: 0,
    width: 610,
    height: 313,
  },

  rectangleLinearGradient: {
    position: "absolute",
    top: 500,
    left: -20,
    borderRadius: 208,
    width: 449,
    height: 334,
    backgroundColor: "transparent",
  },

  vectorPressable: {
    position: "absolute",
    left: "6.62%",
    top: "13.15%",
    right: "89.57%",
    bottom: "84%",
    width: "3.82%",
    height: "2.85%",
  },

  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: -9
  },
 
 text:{
    textAlign:'center',
    fontFamily:'SuezOne-Regular',
    fontSize:32,
    color:'#5E2D14',
    position: 'absolute',
    top: "10%",
    left: "35%",
 },

 registerForm:{
   paddingHorizontal:40,
   marginBottom:0,
   paddingVertical:40,
   // backgroundColor:'rgba(94, 45, 20, 0.69)',
   borderRadius:40,
   position: 'absolute',
   top: "38%",
   left:"8%",
   width: 350
 },

 Register_btn:{
   alignSelf:'center',
   borderRadius:20,
   backgroundColor:'rgba(240, 199, 164, 1)',
   marginTop:80,
   paddingVertical:10,
   width: 160
 },
 btn_label:{
   alignSelf:'center',
   fontFamily:'SuezOne-Regular',
   color:'rgba(94, 45, 20, 1)',
   fontSize:20,
 },
 
 link_to_register:{
    alignSelf:'center',
    paddingTop: 20,
    fontFamily:'SuezOne-Regular',
    color:"#FFFF"
 } 

})
export default Login;