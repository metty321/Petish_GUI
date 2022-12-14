 import React,{useEffect, useState} from 'react';
 import CustomInput from '../../components/CustomInput';
 import LinearGradient from "react-native-linear-gradient";
 import axios from 'axios'
 
 import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Alert,
    RefreshControlBase,
    Image
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

<<<<<<< HEAD
       axios.post('https://petish-back.onrender.com/petish/register',data)
=======
       axios.post('http://10.0.2.2:8888/petish/register',data)
>>>>>>> b182b48218f3ce21d949a03876a0f7a0de4bad5a
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

        <LinearGradient
          style={styles.rectangleLinearGradient}
          locations={[0.45, 1]}
          colors={["rgba(94, 45, 20, 0.69)", "rgba(94, 45, 20, 0)"]}
          useAngle={true}
          angle={179.99}
        />

        <View>
          <Text style={styles.text}>Register</Text>
        </View>

        <Pressable
          style={styles.vectorPressable}
          onPress={() => navigation.navigate("Login")}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../../../assets/img/vector1.png")}
          />
        </Pressable>

        <View style={styles.registerForm}>

          <CustomInput label='Name' 
            placeholder='Your Name' 
            value={name} 
            setValue={setName}
            />

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

  rectangleLinearGradient: {
    position: "absolute",
    top: 150,
    left: 0,
    borderRadius: 30,
    width: 412,
    height: 714,
    backgroundColor: "transparent",
  },

  text:{
    textAlign: 'right',
    fontFamily:'SuezOne-Regular',
    fontSize:32,
    color:'#5E2D14',
    paddingVertical:'8%',
    top: "40%",
    right: "8%"
    // position:'absolute'
   
  },

  vectorPressable: {
    position: "absolute",
    left: "6.11%",
    top: "13.03%",
    right: "90.08%",
    bottom: "84.12%",
    width: "3.82%",
    height: "2.85%",
  },

  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: 20,
    left: 5
  },

  registerForm:{
    paddingHorizontal:40,
    marginBottom:0,
    // backgroundColor:'rgba(94, 45, 20, 0.69)',
    borderRadius:40,
    top: "18%",
    width: 380,
    alignSelf: "center"
  },

  Register_btn:{
<<<<<<< HEAD
    alignSelf:'center', 
=======
    alignSelf:'center',
>>>>>>> b182b48218f3ce21d949a03876a0f7a0de4bad5a
    width:'50%',
    borderRadius:20,
    backgroundColor:'rgba(240, 199, 164, 1)',
    marginTop:20,
    paddingVertical:10,
    width: 160
  },

  btn_label:{
    alignSelf:'center',
    fontFamily:'SuezOne-Regular',
    color:'rgba(94, 45, 20, 1)',
    fontSize:20
  }
  
 
})
 export default Register;