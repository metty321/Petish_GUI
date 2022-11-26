 import React,{useState} from 'react';
 import CustomInput from '../../components/CustomInput';
 import axios, { Axios } from 'axios';
 import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity
  } from 'react-native';


  //buat fungsi buat mengolah input dan mengirimkannya ke database
  const onRegisterPressed = async () =>{
    const data = {
      userName,
      email,
      password
    }

    await Axios.post('https://localhost:8888/petish/register',{data})
    .then(res => {
      console.log('res: ',res);
      setUsername("");
      setEmail("");
      setPassword("");
      if(!res.success){
        alert(res.message);
      }
      else{
        //navigate atau arahin ke halaman varif email dengna token
        //trus kirim {profile: res.user}
      }
    })
    
  };

  const Register = ({ navigation }) => {
    
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Name, setName] = useState('');
    return (
      
      <View style={styles.container}>
        <View>
      <Text style={styles.text}>Register</Text>
      </View>
      <View style={styles.registerForm}>

      <CustomInput label='Name' 
     placeholder='Your Name' 
     value={Name} 
     setValue={setName}/>

     <CustomInput label='Username' 
     placeholder='Your Username' 
     value={userName} 
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
    paddingVertical:0,
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