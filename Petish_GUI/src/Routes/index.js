import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
// import { createAppContainer } from "react-navigation";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Splash from "../pages/Splash";
import Calendar from "../pages/Calendar";
import Food from "../pages/Food";
import Pet_Profile from "../pages/Pet_Profile";
import UserProfile from "../pages/UserProfile";
import Vets from "../pages/Vets";
import CustomBottomNavigator from "../components/CustomBottomNavigator";
import AddPets from "../pages/AddPets";

const Stack = createNativeStackNavigator();
const PetProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AddPetProfile = ()=>{
  return (
    <PetProfileStack.Navigator initialRouteName="Pet_Profile">
      <PetProfileStack.Screen name="Pet_Profile" component={Pet_Profile} options={{
          headerShown:false
        }}/>
    <PetProfileStack.Screen name="AddPets" component={AddPets} options={{
          headerShown:false
        }}/>
    
    </PetProfileStack.Navigator>
  )
}



const MainApp = () => {

  return(
    <Tab.Navigator tabBar={props => <CustomBottomNavigator {...props} initialRouteName={"AddPetScreen"}/>}>
      <Tab.Screen name="AddPetScreen" component={AddPetProfile} options={{headerShown:false}}/>
      <Tab.Screen name="Calendar" component={Calendar} options={{headerShown:false}}/>
      <Tab.Screen name="Food" component={Food} options={{headerShown:false}}/>
      <Tab.Screen name="Vets" component={Vets} options={{headerShown:false}}/>
      <Tab.Screen name="User Profile" component={UserProfile} options={{headerShown:false}}/>
    </Tab.Navigator>

  )
}
    
const Router = () => {
  return  (<Stack.Navigator initialRouteName={"Home"}>
    <Stack.Screen name="Home" component={Home} options={{
          headerShown:false
        }}/>
      <Stack.Screen name="Splash" component={Splash} options={{
          headerShown:false}}
         />
      <Stack.Screen name="Register" component={Register} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="MainApp" component={MainApp} 
        options={{
          headerShown:false
        }}/>
        
    </Stack.Navigator>
    );
};


 export default Router;