import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet,useWindowDimensions,View,Text,Image,ScrollView,RefreshControl } from "react-native";
import Logo from '../../../assets/img/Logo.png'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
//nanti bakal pake useEffect() buat render screen sesuai dengan input user
//referensi     : https://stackoverflow.com/questions/45478621/react-native-styling-with-conditional


// const onAddPressed=(navigat)=>{
    
//     alert('Button Pressed!');
    
// }
const DisplayPet = ({petType}) => {
  

    if (petType === "Dog" || petType === "dog"){
      return (<Image
      style={styles.dog1Icon}
      resizeMode='contain'
      source={require("../../../assets/img/dog-110.png")}/>)
    } 
    else if (petType === "Cat" || petType === "cat"){
      return (<Image
      style={styles.dog1Icon}
      resizeMode='contain'
      source={require("../../../assets/img/cat.png")}/>)
    }
      
    else if (petType === "Rabbit" || petType === "rabit")
        {return( <Image
        style={styles.dog1Icon}
        resizeMode='contain'
        source={require("../../../assets/img/rabbit.png")}/>)
    }
    else if (petType === "Hamster" || petType === "hamster"){
          return (<Image
          style={styles.dog1Icon}
          resizeMode='contain'
          source={require("../../../assets/img/hamster.png")}/>)
        }
    else{
      return (<Image
      style={styles.dog1Icon}
      resizeMode='contain'
      source={require("../../../assets/img/dog-110.png")}/>)}
  
};



const ListItem = ({ item,petType,id})=>{
  const navigation = useNavigation();
    return(
        <View style={styles.item}>
                <Pressable style={styles.PetInfo} onPress={() => navigation.replace("PetInfo",
                {
                  pet_id:id
                }
                  )}>
                <LinearGradient
                        style={styles.rectangleLinearGradient1}
                        locations={[0, 1]}
                        colors={["#f0c7a4", "rgba(240, 199, 164, 0)"]}
                        useAngle={true}
                        angle={112.63}>
                            <Text>
                            <Text style={styles.petName}>{item}</Text></Text>
                            
                        {/* <Pressable
                        style={styles.pressable1}
                        onPress={() => navigation.navigate("Doggo1")}
                        /> */}
                        
                        {/* <Image  
                    style={styles.dog1Icon}
                    resizeMode='contain'
                    source={require("../../../assets/img/dog-110.png")}
                /> */}
                {/* <View style={styles.petImageContainer}> */}
                  {DisplayPet(petType = {petType})}
                  {/* </View> */}
                    </LinearGradient>
                    </Pressable>
            </View> 
    )
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


const Pet_Profile = ({ navigation }) =>{
    const {width,height} = useWindowDimensions();
    const [pets, setPets] =useState([]);
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading]= useState(true);

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(5000).then(() => setRefreshing(false));
  }, [])

  const getContent=()=>{
    if(isLoading)
    {return <ActivityIndicator size="large"/>;}
  }
 
    const user= axios.create({
        baseURL:'https://petish-back.onrender.com/petish',
        // headers:{
        //   'Authorization':"Bearer "+token
        // }
      })
    
    useEffect(()=>{
        async function getItem(){
          const value = await AsyncStorage.getItem("AccessToken");
          console.log(value)
          user.get("/get-all-pet",{headers: {'Authorization':"Bearer "+value}})
          .then(res => {
            setPets(res.data.result)
            setIsLoading(false)
            
          })
        }
        getItem();
      }, [])
      
    //   const findPetInfo =(petId) =>{
    // //  navigation.navigate("PetInfo",{id:petId})
    //     console.log(petId)
    // }
    
    return(
        <View style={styles.root}>
        <Text style={styles.pageTitle}>My Pets</Text>
        
        <View style={[styles.AddPetContainer,{width : width * 0.7}]}>
        
            <View style={styles.AddPet}>
            <Pressable  onPress={()=> navigation.replace('AddPets')}>
            <Text style={styles.addNow}>+</Text>
            </Pressable>
            </View>
        
        <Text style={styles.addPet_Text}>Add your pet now!</Text>
        </View>
      <Image source={Logo} style={[styles.Logo,{height : height * 0.3}]} resizeMode= 'contain'/>

      
      
      <View style={styles.itemContainer}>  
      {getContent()}
      <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.scrollContainer} >
      {pets.map(pet => {
        return <ListItem item={pet.name} petType={pet.type} id={pet._id}/>
      })} 
        </ScrollView> 
      </View>
      
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
        zIndex:-999,
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
    },
    itemContainer:{
        // overflow: 'hidden',
        
        position:'absolute',
        top:'40%',
        alignItems:"center",
        // justifyContent:'center',
        width:'100%',
        height:'60%',
        alignSelf:'center',
        
        
    },
    item:{
        flexDirection:'row',
        width:'100%',
        height:150,
        borderRadius:30,
        backgroundColor:"white",
        marginVertical:10
    },
    petName: {
        position: "absolute",
        top: 160,
        left: 100,
        fontSize: 45,
        fontFamily: "Calligraffitti-Regular",
        color: "#5e2d14",
        textAlign: "center",
    },
    dog1Icon: {
        position: "absolute",
        top: "-20%",
        left: 180,
        width: 200,
        height: 200,
    },
    rectangleLinearGradient1: {
        width: '100%',
        height: '100%',
        borderRadius:20,
        paddingHorizontal:"10%",
        paddingTop:"5%"
    },
    scrollContainer:{
        flex:1
    },
    PetInfo:{
        width:'100%',
        height:150,
    },
    petImageContainer:{
      width:100,
      height:100
    }
   
   })

export default Pet_Profile;
