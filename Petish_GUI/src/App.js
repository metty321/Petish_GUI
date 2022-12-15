
import Splash from './pages/Splash';
import React from 'react';
import Router from './Routes';
import { NavigationContainer } from '@react-navigation/native';


import {
  StyleSheet,
  View,
} from 'react-native';


import Home from './pages/Home'


const App = () => {
 
   
    return (
    <View style={styles.root}>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    
    </View>
    
    );
};

const styles = StyleSheet.create({
  root:{
    flex:1
  }
})

export default App;
