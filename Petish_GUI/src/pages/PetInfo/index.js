import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet,useWindowDimensions,View,Text,Image,ScrollView,RefreshControl } from "react-native";
import Logo from '../../../assets/img/Logo.png'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";



const PetInfo = ({route,   navigation: { goBack },navigation}) => {
  const {pet_id} = route.params
  const [token,setToken] = useState('')
  const [name,setName]= useState('')
  const [type,setType]= useState('')
  const [sex, setSex] =useState('')
  const [age,setAge] = useState('')
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  

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
      user.post("/get-pet",{"id" : pet_id},
      {headers: {'Authorization':"Bearer "+value}})
          .then(res => {
            // console.log("res: ",res.data.result.type)
            setName(res.data.result.name)
            setType(res.data.result.type)
            setSex(res.data.result.sex)
  
            const year = new Date(res.data.result.date).getFullYear();
            const month = new Date(res.data.result.date).getMonth();
            const day = new Date(res.data.result.date).getDate();
            var age_temp = currentYear - year;
            if (currentMonth < month || (currentMonth == month && currentDay < day)) {
              age_temp--;
            }
            setAge(age_temp)
            console.log(res.data.result.date)
          })
     
    }
    getItem();
  }, []) 

  const PetImage = ({petType}) => {
  

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

  const SexSymbol =({sex}) => {
    if (sex === "Male" || sex === "male"){
      return (<Image
        style={styles.femaleIcon}
        resizeMode="contain"
        source={require("../../../assets/img/male.png")}/>)
    } 
    else{
      return (<Image
        style={styles.femaleIcon}
        resizeMode="contain"
        source={require("../../../assets/img/female.png")}/>)}
  }
  
  return (
    
    <View style={styles.doggoView}>
      <LinearGradient
        style={styles.rectangleLinearGradient}
        locations={[0, 1]}
        colors={["#f0c7a4", "rgba(240, 199, 164, 0)"]}
        useAngle={true}
        angle={112.63}
      />
      <Text style={styles.petName}>{name}</Text>
     
      {/* <Image
      style={styles.dog1Icon}
      resizeMode="cover"
    source={require("../../../assets/img/dog-110.png")}/> */}
      <PetImage petType={type}/>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../../../assets/img/vector1.png")}
        />
      </Pressable>
      <LinearGradient
        style={styles.rectangleLinearGradient1}
        colors={["#5E2D14", "rgba(255,255,255,0)"]}
        useAngle={true}
        angle={143.5}
      />
      <LinearGradient
        style={styles.rectangleLinearGradient2}
        colors={["#5E2D14", "rgba(255, 255, 255, 0)"]}
        useAngle={true}
        angle={143.5}
      />
      <SexSymbol sex={sex}/>
      <Text style={styles.sexText}>Sex</Text>
      <Text style={styles.yearsOldText1}>
        <Text style={styles.text}>{age}</Text>
        <Text style={styles.yearsOldText}>years old</Text>
      </Text>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("AddReminder")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.addReminderText}>Add Reminder</Text>
      </Pressable>
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("AddPets")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Pressable
        style={styles.deletePressable}
        onPress={() => navigation.navigate("Doggo")}
      >
        <Image
          style={styles.icon1}
          resizeMode="contain"
          source={require("../../../assets/img/delete.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLinearGradient: {
    position: "absolute",
    top: -13,
    left: 0,
    borderRadius: 20,
    width: 411,
    height: 881,
    backgroundColor: "transparent",
  },
  petName: {
    position: "absolute",
    alignSelf:'center',
    top: "58%",
    fontSize: 64,
    fontFamily: "Calligraffitti-Regular",
    color: "#5e2d14",
    textAlign: "center"
  },
  dog1Icon: {
    position: "absolute",
    top: "10%",
    // left: 58,
    width: 240,
    height: 240,
    alignSelf:'center'
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "8.11%",
    top: "8%",
    right: "90.08%",
    bottom: "84.12%",
    width: "3.82%",
    height: "2.85%",
  },
  rectangleLinearGradient1: {
    position: "absolute",
    top: "80%",
    left: "20%",
    borderRadius: 20,
    width: 100,
    height: 100,
    backgroundColor: "transparent",
  },
  rectangleLinearGradient2: {
    position: "absolute",
    top: "80%",
    left: "66%",
    borderRadius: 20,
    width: 100,
    height: 100,
    backgroundColor: "transparent",
  },
  femaleIcon: {
    position: "absolute",
    height: "4.99%",
    width: "7%",
    top: "82.02%",
    right: "65.97%",
    bottom: "29.99%",
    left: "30.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sexText: {
    position: "absolute",
    top: "88.5%",
    left: "29.5%",
    fontSize: 24,
    fontFamily: "Calligraffitti-Regular",
    color: "#f0c7a4",
    textAlign: "left",
  },
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 7,
  },
  yearsOldText: {
    margin: 0,
  },
  yearsOldText1: {
    position: "absolute",
    top: "85.5%",
    left: "67%",
    fontSize: 18,
    fontFamily: "Calligraffitti-Regular",
    color: "#f0c7a4",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: -120,
    left: 8,
    borderRadius: 20,
    backgroundColor: "#f0c7a4",
    width: 285,
    height: 48,
  },
  addReminderText: {
    position: "absolute",
    top: -110,
    left: 83,
    fontSize: 20,
    fontFamily: "SuezOne-Regular",
    color: "#5e2d14",
    textAlign: "left",
    width: 139,
  },
  groupPressable: {
    position: "absolute",
    top: 703,
    left: 55,
    width: 285,
    height: 48,
  },
  rectangleView1: {
    position: "absolute",
    top: -240,
    left: 10,
    borderRadius: 20,
    backgroundColor: "#825b46",
    width: 285,
    height: 48,
  },
  editText: {
    position: "absolute",
    top: -230,
    left: 130,
    fontSize: 20,
    fontFamily: "SuezOne-Regular",
    color: "#f0c7a4",
    textAlign: "left",
    width: 43,
  },
  groupPressable1: {
    position: "absolute",
    top: 762,
    left: 53,
    width: 285,
    height: 48,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  deletePressable: {
    position: "absolute",
    left: 333,
    top: "7%",
    width: 35,
    height: 35,
  },
  doggoView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    padding: 20
  },
});

export default PetInfo;
