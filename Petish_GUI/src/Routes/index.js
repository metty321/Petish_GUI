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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {

  return(
    <Tab.Navigator tabBar={props => <CustomBottomNavigator {...props} />}>
      <Tab.Screen name="Pet Profile" component={Pet_Profile}/>
      <Tab.Screen name="Calendar" component={Calendar}/>
      <Tab.Screen name="Food" component={Food}/>
      <Tab.Screen name="Vets" component={Vets}/>
      <Tab.Screen name="User Profile" component={UserProfile}/>
    </Tab.Navigator>

  )
}
    
const Router = () => {
  return  (<Stack.Navigator>
        <Stack.Screen name="MainApp" component={MainApp} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown:false}}
         />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    );
};


 export default Router;