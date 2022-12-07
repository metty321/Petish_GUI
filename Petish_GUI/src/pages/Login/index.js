import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomInput from '../../components/CustomInput';
import {
   StyleSheet,
   Text,
   View,
   Pressable,
   TouchableOpacity
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

  axios.post('http://10.0.2.2:8888/petish/login',data)
  .then(res => {
    alert('Login successful')
    console.log('res: ',res.data.user.token);
    AsyncStorage.setItem("AccessToken",res.data.user.token)
    setEmail("");
    setPassword("");
    navigation.replace("MainApp")
  }).catch(err=>console.log(err))


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
       <View>
     <Text style={styles.text}>Sign In</Text>
     </View>
     <View style={styles.registerForm}>
    
    <CustomInput label='Email' placeholder='Your Email' setValue={setEmail}/>
    {/* <CustomInput label='Phone Number' placeholder='Your Phone Number' setValue={setPhoneNumber}/> */}
    <CustomInput label='Password' placeholder='Your Password' setValue={setPassword}/>
    
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
   paddingVertical:20
   
 },
 text:{
   textAlign:'center',
   fontFamily:'SuezOne-Regular',
   fontSize:32,
   color:'#5E2D14',
   paddingVertical:50,
   // position:'absolute'
  
 },

 registerForm:{
   paddingHorizontal:40,
   marginBottom:0,
   paddingVertical:40,
   // backgroundColor:'rgba(94, 45, 20, 0.69)',
   borderRadius:40
 },

 Register_btn:{
   alignSelf:'center',
   width:'50%',
   borderRadius:50,
   backgroundColor:'rgba(240, 199, 164, 1)',
   marginTop:50,
   paddingVertical:10
 },
 btn_label:{
   alignSelf:'center',
   fontFamily:'SuezOne-Regular',
   color:'rgba(94, 45, 20, 1)',
   fontSize:20
 },
 
 link_to_register:{
    alignSelf:'center',
    paddingTop: 20
 } 

})
export default Login;