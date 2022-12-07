import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const PetProfileWithPet = () =>{
    const navigation = useNavigation();
    const {width,height} = useWindowDimensions();

  return (
    <View style={styles.mainMenuWithPet}>
    
        <Text style={styles.pageTitle}>My Pets</Text>
        <View style={styles.rectangleView} />
        
        <LinearGradient
            style={styles.rectangleLinearGradient1}
            locations={[0, 1]}
            colors={["#f0c7a4", "rgba(240, 199, 164, 0)"]}
            useAngle={true}
            angle={112.63}
        >
            <Pressable
            style={styles.pressable1}
            onPress={() => navigation.navigate("Doggo1")}
            />
        </LinearGradient>
        <Text style={styles.doggoText}>Doggo</Text>
        <Image
            style={styles.dog1Icon}
            resizeMode="cover"
            source={require("../../../assets/img/dog-110.png")}
        />
    
        <View style={[styles.AddPetContainer,{width : width * 0.7}]}>
            <View style={styles.AddPet}>
                <Pressable  onPress={()=> navigation.navigate('AddPets')}>
                    <Text style={styles.addNow}>+</Text>
                </Pressable>
            </View>
            <Text style={styles.addPet_Text}>Add your pet now!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20,
    },

    pageTitle:{
        textAlign:'center',
        marginTop:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },

    rectangleView: {
        position: "absolute",
        top: 580,
        left: 0,
        borderRadius: 40,
        backgroundColor: "#916f5e",
        width: 412,
        height: 132,
    },

    rectangleLinearGradient1: {
        position: "absolute",
        left: 23,
        top: 200,
        width: 342,
        height: 179,
        borderRadius:30
    },

    doggoText: {
        position: "absolute",
        top: 200,
        left: 40,
        fontSize: 64,
        fontFamily: "Calligraffitti-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    dog1Icon: {
        position: "absolute",
        top: 140,
        left: 150,
        width: 244,
        height: 244,
    },
    pressable1: {
        borderRadius: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
    },
     rectanglePressable: {
        position: "absolute",
        top: 198,
        left: 23,
        borderRadius: 100,
        backgroundColor: "#916f5e",
        width: 56,
        height: 56,
    },
    vectorIcon: {
        position: "absolute",
        height: "2.93%",
        width: "6.36%",
        top: "33%",
        right: "83.97%",
        bottom: "72.07%",
        left: "9.2%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },

    AddPetContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:30,
        top: "10%",
        right: "3%"
     },

    addPet_Text:{
        alignSelf:'center',
        fontFamily:'SuezOne-Regular',
        color:'#5E2D14',
        fontSize:18
    },
    addNow:{
        textAlign:'center',
        top: -2,
        fontSize:30,
        color:'white',
        fontFamily:'SuezOne-Regular'
    },
    AddPet:{
        width: 50,
        height: 50,
        borderRadius: 50/ 2,
        backgroundColor: 'rgba(145, 111, 94, 1)',
        justifyContent:'center',
        alignContent:'center'
    },

})

export default PetProfileWithPet;