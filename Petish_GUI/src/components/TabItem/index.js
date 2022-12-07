import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   TextInput,
   View,
   Dimensions,
   TouchableOpacity
 } from 'react-native';

 import PetProfile from '../../../assets/icons/Paw.svg'
 import PetProfileActive from '../../../assets/icons/paw_ACTIVE.svg'
 import UserProfile from '../../../assets/icons/userProfile.svg'
 import UserProfileActive from '../../../assets/icons/userProfile_ACTIVE.svg'
 import Calendar from '../../../assets/icons/calendar.svg'
 import CalendarActive from '../../../assets/icons/calendar_ACTIVE.svg'
 import Food from '../../../assets/icons/food.svg'
 import FoodActive from '../../../assets/icons/food_ACTIVE.svg'
 import Vets from '../../../assets/icons/vets.svg'
 import VetsACtive from '../../../assets/icons/vets_ACTIVE.svg'
 

 const TabItem = ({index,isFocused,label,onPress,onLongPress}) => {
   var width = Dimensions.get('window').width;
  
  const Icon = ()=>{
    if (label ==="AddPetScreen"){
      return isFocused?<PetProfileActive/>:<PetProfile/>;
    }
    if (label ==="Calendar"){
      return isFocused?<CalendarActive/>:<Calendar/>;;
    }

    if(label ==="Food"){
      return isFocused? <FoodActive/>:<Food/>;
    }
    if(label ==="Vets"){
      return isFocused? <VetsACtive/>:<Vets/>;
    }
    if(label ==="User Profile"){
      return isFocused? <UserProfileActive/>:<UserProfile/>;
    }
  }

   return (
    <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.container}
  >
    <Icon/>
    {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
      {label}
    </Text> */}
  </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container:{
    alignContent:'center',
    justifyContent:'center',
    padding :5
   }

})
export default TabItem;