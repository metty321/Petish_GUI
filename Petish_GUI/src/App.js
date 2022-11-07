/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App = () => {
 
   
    return (
    <View style={styles.root}>
      <Register />
      {/* <Login/> */}
      {/* <Home/> */}
    </View>
    );
};

const styles = StyleSheet.create({
  root:{
    flex:1
  },
});


export default App;
