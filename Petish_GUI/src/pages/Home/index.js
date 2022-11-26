import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import Logo from '../../../assets/img/Logo.png'
import {
   StyleSheet,
   Text,
   View,
   Image,
   useWindowDimensions,
   Pressable,
   TouchableOpacity
 } from 'react-native';

 

 const Home =({ navigation }) => {
    //const [user, setUser] = useState([]);
    const {width,height} = useWindowDimensions();
    return(
    <View style={styles.root}>  
        <Image source={Logo} style={[styles.Logo,{height : height * 0.5}]} resizeMode="contain"/>
        <Text style={styles.title}>PETISH</Text>
        <Text style={styles.subtitle}>Pet Healthiest</Text>
        <Pressable  
        style={[styles.continue_btn,{width : width * 0.6}]}
        onPress={()=>navigation.navigate('Login')}>
    <TouchableOpacity>
     <Text style={styles.btn_label}>Continue</Text>
     </TouchableOpacity>
    </Pressable>
    </View> 
    )
       
    

 }

 const styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor:'rgba(240, 199, 164, 1)',
      alignItems:'center'
    },
    Logo:{
        zIndex:999,
        width:'70%',
        height:100,
        maxHeight:1000,
        maxWidth:2000,
        marginBottom:0
    },
    title:{
        fontFamily:'SuezOne-Regular',
        fontSize:64,
        marginTop:0,
        paddingTop:0
    },
    subtitle:{
        fontFamily:'Calligraffitti-Regular',
        fontSize:18,
        paddingTop:0    
    },
    continue_btn:{
        alignSelf:'center',
        maxWidth:'100%',
        borderRadius:50,
        backgroundColor:'#7B533E',
        marginTop:50,
        paddingVertical:10
    },
    btn_label:{
        alignSelf:'center',
        fontFamily:'SuezOne-Regular',
        color:'#FFFF',
        fontSize:20
      }
  });
 export default Home;