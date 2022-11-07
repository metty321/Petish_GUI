import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   TextInput,
   View,
   Dimensions
 } from 'react-native';


 const CustomInput = (props) => {
   var width = Dimensions.get('window').width;
  const [value,setValue] =  useState('');
   return (
     
     
    
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
     <TextInput 
     placeholder={props.placeholder} 
     style={styles.input}
     onChangeText={props.setValue}/>
     </View>
     
   );
};

const styles = StyleSheet.create({
   
 container:{
   //  backgroundColor:'red',
   //  width: width1,
   marginBottom:20
    
 },
 
 input:{
    alignSelf:'stretch',
    borderBottomColor:'rgba(0, 0, 0, 1)',
    borderBottomWidth:1
 }
,
 label:{
   fontFamily:'SuezOne-Regular'
 }

})
export default CustomInput;