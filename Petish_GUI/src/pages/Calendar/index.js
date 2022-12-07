import React from "react";
import { StyleSheet,useWindowDimensions,View,Text, Image } from "react-native";

const Calendar = () =>{
    
    return(

        <View style={styles.root}>
            <Text style={styles.pageTitle}>Calendar</Text>
            <View style={styles.rectangleView} />

            <Text style={styles.november2022Text}>December 2022</Text>
            <Text style={styles.suText}>Su</Text>
            <Text style={styles.text}>13</Text>
            <Text style={styles.text1}>14</Text>
            <Text style={styles.text2}>15</Text>
            <Text style={styles.text3}>16</Text>
            <Text style={styles.text4}>17</Text>
            <Text style={styles.text5}>18</Text>
            <Text style={styles.text6}>19</Text>
            <Text style={styles.moText}>Mo</Text>
            <Text style={styles.tuText}>Tu</Text>
            <Text style={styles.weText}>We</Text>
            <Text style={styles.thText}>Th</Text>
            <Text style={styles.frText}>Fr</Text>
            <Text style={styles.saText}>Sa</Text>
           

            <Image
                style={styles.arrowBackIosIcon}
                resizeMode="cover"
                source={require("../../../assets/img/arrow-back-ios.png")}
            />
            <Image
                style={styles.arrowBackIosIcon1}
                resizeMode="cover"
                source={require("../../../assets/img/arrow-back-ios1.png")}
            />

        </View>
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20
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
    top: "29%",
    left: 181.5,
    borderRadius: 30,
    backgroundColor: "#f0c7a4",
    width: 36,
    height: 63,
    },

    calendarText: {
    position: "absolute",
    top: "10%",
    left: "28%",
    fontSize: 40,
    fontFamily:'SuezOne-Regular',
    color: "#5e2d14",
    textAlign: "left",
  },

    november2022Text: {
    position: "absolute",
    top: "23%",
    left: 60,
    fontSize: 20,
    fontFamily:'SuezOne-Regular',
    color: "#5e2d14",
    textAlign: "left",
  },
  suText: {
    position: "absolute",
    top: "30%",
    left: 30,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c6c6c8",
    textAlign: "left",
  },

  text: {
    position: "absolute",
    top: "36%",
    left: 32,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c0c7c6",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: "36%",
    left: 85,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c0c7c6",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: "36%",
    left: 140,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c0c7c6",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: "36%",
    left: 192,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#5e2d14",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: "36%",
    left: 247,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c0c7c6",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: "36%",
    left: 297,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c0c7c6",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    top: "36%",
    left: 346,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c0c7c6",
    textAlign: "left",
  },
  moText: {
    position: "absolute",
    top: "30%",
    left: 81,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c6c6c8",
    textAlign: "left",
  },
  tuText: {
    position: "absolute",
    top: "30%",
    left: 136,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c6c6c8",
    textAlign: "left",
  },
  weText: {
    position: "absolute",
    top: "30%",
    left: 188,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#5e2d14",
    textAlign: "left",
  },
  thText: {
    position: "absolute",
    top: "30%",
    left: 244,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c6c6c8",
    textAlign: "left",
  },
  frText: {
    position: "absolute",
    top: "30%",
    left: 297,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c6c6c8",
    textAlign: "left",
  },
  saText: {
    position: "absolute",
    top: "30%",
    left: 345,
    fontSize: 15,
    fontFamily:'SuezOne-Regular',
    color: "#c6c6c8",
    textAlign: "left",
  },
  arrowBackIosIcon: {
    position: "absolute",
    top: "24%",
    left: 30,
    width: 20,
    height: 20,
  },
  arrowBackIosIcon1: {
    position: "absolute",
    top: "24%",
    left: 212,
    width: 20,
    height: 20,
  },
   
})

export default Calendar;