 import React,{useEffect, useState} from 'react';
 import CustomInput from '../../components/CustomInput';
 import axios from 'axios'
 
 import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Alert,
    RefreshControlBase
  } from 'react-native';
// import { err } from 'react-native-svg/lib/typescript/xml';


 

  const Register = ({ navigation }) => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

     function onRegisterPressed() {
      const data = {
        name: name,
        email: email,
        username: username,
        password: password
      }
      // await axios.post(`http://192.168.110.18:8888/petish/register`, 
      // data)
      // .then(function (response) {
      //   alert('pressed')
      //   alert(response.message)
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   if (error.response){

      //     //do something
      //     alert('error from backend')
          
      //     }else if(error.request){
          
      //     //do something else
      //     alert('error from request')
          
      //     }else if(error.message){
      //     alert(error.message)
      //     //do something other than the other two
          
      //     }
      // });
      // console.log(data)
      // fetch(`https://localhost:8888/petish/register`,{
      //   method:'POST',
      //   header:{
      //     'Content-Type' : 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // }).then(response=>{
      //   console.log('res: ',response.json());
      //   alert('registered!')
      // })

       axios.post('http://10.0.2.2:8888/petish/register',data)
      .then(res => {
        alert('registered!')
        console.log('res: ',res);
        setName("")
        setUsername("");
        setEmail("");
        setPassword("");
        navigation.navigate("Login")
      }).catch(err=>console.log(err))
     
      
    };

 //buat fungsi buat mengolah input dan mengirimkannya ke database



    return (
      
      
      <View style={styles.container}>
        <View>
      <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.registerForm}>

      <CustomInput label='Name' 
     placeholder='Your Name' 
     value={name} 
     setValue={setName}/>

     <CustomInput label='Username' 
     placeholder='Your Username' 
     value={username} 
     setValue={setUsername}/>

     <CustomInput label='Email' 
     placeholder='Your Email' 
     value={email} 
     setValue={setEmail}
     />

     <CustomInput 
     label='Password' 
     placeholder='Your Password' 
     value={password} 
     setValue={setPassword}
     secureTextEntry
     />
     
     <Pressable  onPress={onRegisterPressed} style={styles.Register_btn}>
     <TouchableOpacity>
      <Text style={styles.btn_label}>Register</Text>
      </TouchableOpacity>
     </Pressable>
     
     </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container:{
    // alignItems:'center',
    paddingVertical:0
    
  },
  text:{
    textAlign:'center',
    fontFamily:'SuezOne-Regular',
    fontSize:32,
    color:'#5E2D14',
    paddingVertical:'8%',
    // position:'absolute'
   
  },

  registerForm:{
    paddingHorizontal:40,
    marginBottom:0,
    // backgroundColor:'rgba(94, 45, 20, 0.69)',
    borderRadius:40
  },

  Register_btn:{
    alignSelf:'center',
    width:'50%',
    borderRadius:50,
    backgroundColor:'rgba(240, 199, 164, 1)',
    marginTop:20,
    paddingVertical:10
  },
  btn_label:{
    alignSelf:'center',
    fontFamily:'SuezOne-Regular',
    color:'rgba(94, 45, 20, 1)',
    fontSize:20
  }
  
 
})
 export default Register;