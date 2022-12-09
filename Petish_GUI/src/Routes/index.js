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
import PetProfileWithPet from "../pages/PetProfileWithPet";
import EditUserProfile from "../pages/EditUserProfile";
import AddReminder from "../pages/AddReminder";
import PetInfo from "../pages/PetInfo"
import FoodDetail from "../pages/FoodDetail"
import EditReminder from "../pages/EditReminder"
import Logout from "../pages/Logout"

const Stack = createNativeStackNavigator();
const PetProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const editUserProfileStack = createBottomTabNavigator();

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

/*const userProfile = ()=>{
  return (
    <PetProfileStack.Navigator initialRouteName="UserProfile">
      <PetProfileStack.Screen name="UserProfile" component={UserProfile} options={{
          headerShown:false
        }}/>
    <PetProfileStack.Screen name="editUserProfile" component={editUserProfile} options={{
          headerShown:false
        }}/>
    
    </PetProfileStack.Navigator>
  )
}*/


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
  return  (<Stack.Navigator initialRouteName={"MainApp"}>
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
        <Stack.Screen name="PetProfileWithPet" component={PetProfileWithPet} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="EditUserProfile" component={EditUserProfile} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="AddReminder" component={AddReminder} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="PetInfo" component={PetInfo} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="EditReminder" component={EditReminder} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Logout" component={Logout} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="UserProfile" component={UserProfile} options={{
          headerShown:false
        }}/>
        
    </Stack.Navigator>
    );
};


 export default Router;