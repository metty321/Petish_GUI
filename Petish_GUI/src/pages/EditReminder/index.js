import React from "react";
import { StyleSheet,useWindowDimensions,View,Text, Image, Pressable } from "react-native";

const EditReminder = ({navigation}) =>{
    
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

            <View style={styles.rectangleView2} />
            <Pressable
            style={styles.rectanglePressable}
            onPress={() => navigation.navigate("Calendar")}
            />
            <Pressable
                style={styles.rectanglePressable1}
                onPress={() => navigation.navigate("Calendar")}
            />
            <View style={styles.rectangleView3} />
            <Image
              style={styles.notificationsIcon}
              resizeMode="contain"
              source={require("../../../assets/img/notifications.png")}
          />
          <Pressable
              style={styles.rectangleTime}
              onPress={() => navigation.navigate("")}
          />
          <Pressable
              style={styles.rectangleRepeat}
              onPress={() => navigation.navigate("")}
          />
          <Pressable
              style={styles.rectangleDate}
              onPress={() => navigation.navigate("")}
          />

          <Pressable
            style={styles.deletePressable} //alert
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </Pressable>

          <Text style={styles.repeatText}>Repeat</Text>
          <Text style={styles.dateText}>Date</Text>
          <Text style={styles.titleText}>Title</Text>
          <Text style={styles.notesText}>Notes</Text>
          <Text style={styles.timeText}>Time</Text>
          <View style={styles.lineView} />
          <View style={styles.lineView1} />
          <View style={styles.lineView2} />
          <View style={styles.lineView3} />
          <Image
              style={styles.nestClockFarsightAnalogIcon}
              resizeMode="cover"
              source={require("../../../assets/img/nest-clock-farsight-analog.png")}
          />
          <Image
              style={styles.calendarMonthIcon}
              resizeMode="cover"
              source={require("../../../assets/img/calendar-month.png")}
          />

          <Pressable
            style={styles.vectorPressable}
            onPress={() => navigation.navigate("MainMenuWithPet")}
          >
            <Image
              style={styles.icon4}
              resizeMode="contain"
              source={require("../../../assets/img/vector.png")}
            />
          </Pressable>

          <Text style={styles.saveText}>Save</Text>

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

    rectangleView2: {
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      width: 420,
      height: 852,
    },

    rectangleView3: {
      position: "absolute",
      top: 180,
      left: 25,
      borderRadius: 30,
      backgroundColor: "#f0c7a4",
      width: 358,
      height: 350,
    },
    notificationsIcon: {
      position: "absolute",
      height: "4.6%",
      width: "7.97%",
      top: "32.15%",
      right: "11.37%",
      bottom: "61.25%",
      left: "85.66%",
      maxWidth: "100%",
      overflow: "hidden",
      maxHeight: "100%",
    },
    rectangleTime: {
      position: "absolute",
      top: 380,
      left: 25,
      backgroundColor: "#f0c7a4",
      width: 358,
      height: 43,
    },
    rectangleRepeat: {
      position: "absolute",
      top: 440,
      left: 49,
      backgroundColor: "#f0c7a4",
      width: 299,
      height: 43,
    },
    rectangleDate: {
      position: "absolute",
      top: 330,
      left: 25,
      backgroundColor: "#f0c7a4",
      width: 358,
      height: 43,
    },
    repeatText: {
      position: "absolute",
      top: 445,
      left: 55,
      fontSize: 16,
      fontFamily: "SuezOne-Regular",
      color: "#5e2d14",
      textAlign: "left",
      width: 71,
    },
    dateText: {
      position: "absolute",
      top: 340,
      left: 87,
      fontSize: 16,
      fontFamily: "SuezOne-Regular",
      color: "rgba(94, 45, 20, 0.3)",
      textAlign: "left",
      width: 51,
    },
    titleText: {
      position: "absolute",
      top: 240,
      left: 49,
      fontSize: 16,
      fontFamily: "SuezOne-Regular",
      color: "rgba(94, 45, 20, 0.3)",
      textAlign: "left",
      width: 51,
    },
    notesText: {
      position: "absolute",
      top: 290,
      left: 49,
      fontSize: 16,
      fontFamily: "SuezOne-Regular",
      color: "rgba(94, 45, 20, 0.3)",
      textAlign: "left",
      width: 57,
    },
    timeText: {
      position: "absolute",
      top: 390,
      left: 87,
      fontSize: 16,
      fontFamily: "SuezOne-Regular",
      color: "rgba(94, 45, 20, 0.3)",
      textAlign: "left",
      width: 52,
    },
    lineView: {
      position: "absolute",
      top: 270,
      left: 48.5,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderTopWidth: 1,
      width: 289,
      height: 1,
    },
    lineView1: {
      position: "absolute",
      top: 365,
      left: 86.5,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderTopWidth: 1,
      width: 251,
      height: 1,
    },
    lineView2: {
      position: "absolute",
      top: 415,
      left: 86.5,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderTopWidth: 1,
      width: 251,
      height: 1,
    },
    lineView3: {
      position: "absolute",
      top:320,
      left: 48.5,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderTopWidth: 1,
      width: 289,
      height: 1,
    },
    nestClockFarsightAnalogIcon: {
      position: "absolute",
      top: 390,
      left: 49,
      width: 24,
      height: 24,
    },
    calendarMonthIcon: {
      position: "absolute",
      top: 340,
      left: 49,
      width: 24,
      height: 24,
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

    rectanglePressable: {
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      width: 393,
      height: 265,
    },
    rectanglePressable1: {
      position: "absolute",
      top: 587,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      width: 393,
      height: 265,
    },

    deleteText: {
      fontSize: 20,
      fontFamily: "SuezOne-Regular",
      color: "#d12c2c",
      textAlign: "left",
      width: 65,
    },
    deletePressable: {
      position: "absolute",
      left: 48,
      top: 200,
    },

    saveText: {
      position: "absolute",
      top: 490,
      left: 286,
      fontSize: 20,
      fontFamily: "SuezOne-Regular",
      color: "#5e2d14",
      textAlign: "left",
      width: 51,
    },

    icon4: {
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      overflow: "hidden",
      maxHeight: "100%",
    },
    vectorPressable: {
      position: "absolute",
      left: "86.46%",
      top: "73.15%",
      right: "13.99%",
      bottom: "34.95%",
      width: "2.54%",
      height: "1.9%"
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

export default EditReminder;