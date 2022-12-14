import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const AddReminder = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.reminderView}>
        <LinearGradient
            style={styles.rectangleLinearGradient}
            locations={[0, 1]}
            colors={["#f0c7a4", "rgba(240, 199, 164, 0)"]}
            useAngle={true}
            angle={112.63}
        />
        <Image
            style={styles.dog1Icon}
            resizeMode="cover"
            source={require("../../../assets/img/dog-11.png")}
        />
        {/*<Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../../../assets/img/vector1.png")}
        />/*/}
        <Pressable
            style={styles.groupPressable}
            onPress={() => navigation.navigate("AddPet6")}
        >
            <View style={styles.rectangleView} />
            <Text style={styles.editText}>Edit</Text>
        </Pressable>
        <View style={styles.groupView}>
            <LinearGradient
            style={styles.rectangleLinearGradient1}
            locations={[0, 1]}
            colors={["#5e2d14", "rgba(255, 255, 255, 0)"]}
            useAngle={true}
            angle={143.5}
            />
            <Image
            style={styles.femaleIcon}
            resizeMode="cover"
            source={require("../../../assets/img/female.png")}
            />
            <Text style={styles.sexText}>Sex</Text>
        </View>
        <View style={styles.groupView1}>
            <LinearGradient
            style={styles.rectangleLinearGradient2}
            locations={[0, 1]}
            colors={["#5e2d14", "rgba(255, 255, 255, 0)"]}
            useAngle={true}
            angle={143.5}
            />
            <Text style={styles.yearsOldText1}>
            <Text style={styles.text}>{` 1.5 `}</Text>
            <Text style={styles.yearsOldText}>years old</Text>
            </Text>
        </View>
        <View style={styles.groupView2}>
            <View style={styles.rectangleView1} />
            <Text style={styles.addReminderText}>Add Reminder</Text>
        </View>
        <View style={styles.rectangleView2} />
        <Pressable
            style={styles.rectanglePressable}
            onPress={() => navigation.navigate("Doggo1")}
        />
        <Pressable
            style={styles.rectanglePressable1}
            onPress={() => navigation.navigate("Doggo1")}
        />
        <View style={styles.rectangleView3} />
        <Image
            style={styles.notificationsIcon}
            resizeMode="cover"
            source={require("../../../assets/img/notifications.png")}
        />
        <Pressable
            style={styles.rectanglePressable2}
            onPress={() => navigation.navigate("Reminder3")}
        />
        <Pressable
            style={styles.rectanglePressable3}
            onPress={() => navigation.navigate("Reminder5")}
        />
        <Pressable
            style={styles.rectanglePressable4}
            onPress={() => navigation.navigate("Reminder1")}
        />
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
            style={styles.icon}
            resizeMode="cover"
            source={require("../../../assets/img/vector.png")}
            />
        </Pressable>
        <Pressable
            style={styles.deletePressable}
            onPress={() => navigation.navigate("Doggo")}
        >
            <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../../../assets/img/delete.png")}
            />
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  rectangleLinearGradient: {
    position: "absolute",
    top: -13,
    left: -8,
    borderRadius: 20,
    width: 410,
    height: 881,
    backgroundColor: "transparent",
  },
  dog1Icon: {
    position: "absolute",
    top: 135,
    left: 39,
    width: 312,
    height: 312,
  },
  vectorIcon: {
    position: "absolute",
    height: "2.85%",
    width: "3.82%",
    top: "13.03%",
    right: "90.08%",
    bottom: "84.12%",
    left: "6.11%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    backgroundColor: "#5e2d14",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#825b46",
    width: 285,
    height: 48,
  },
  editText: {
    position: "absolute",
    top: 11,
    left: 122,
    fontSize: 20,
    fontFamily: "Suez One",
    color: "#f0c7a4",
    textAlign: "left",
    width: 43,
  },
  groupPressable: {
    position: "absolute",
    top: 762,
    left: 53,
    width: 285,
    height: 48,
  },
  rectangleLinearGradient1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 130,
    height: 130,
    backgroundColor: "transparent",
  },
  femaleIcon: {
    position: "absolute",
    height: "32.69%",
    width: "21.15%",
    top: "15.38%",
    right: "39.42%",
    bottom: "51.92%",
    left: "39.42%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sexText: {
    position: "absolute",
    top: 73,
    left: 46,
    fontSize: 32,
    fontFamily: "Water Brush",
    color: "#f0c7a4",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 534,
    left: 55,
    width: 130,
    height: 130,
  },
  rectangleLinearGradient2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 130,
    height: 130,
    backgroundColor: "transparent",
  },
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 7,
  },
  yearsOldText: {
    margin: 0,
  },
  yearsOldText1: {
    position: "absolute",
    top: 19,
    left: 22,
    fontSize: 32,
    fontFamily: "Water Brush",
    color: "#f0c7a4",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    top: 534,
    left: 210,
    width: 130,
    height: 130,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#f0c7a4",
    width: 285,
    height: 48,
  },
  addReminderText: {
    position: "absolute",
    top: 11,
    left: 73,
    fontSize: 20,
    fontFamily: "Suez One",
    color: "#5e2d14",
    textAlign: "left",
    width: 139,
  },
  groupView2: {
    position: "absolute",
    top: 703,
    left: 54,
    width: 285,
    height: 48,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 393,
    height: 852,
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
  rectangleView3: {
    position: "absolute",
    top: 274,
    left: 18,
    borderRadius: 30,
    backgroundColor: "#f0c7a4",
    width: 358,
    height: 307,
  },
  notificationsIcon: {
    position: "absolute",
    height: "4.6%",
    width: "7.97%",
    top: "34.15%",
    right: "11.37%",
    bottom: "61.25%",
    left: "80.66%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectanglePressable2: {
    position: "absolute",
    top: 454,
    left: 18,
    backgroundColor: "#f0c7a4",
    width: 358,
    height: 43,
  },
  rectanglePressable3: {
    position: "absolute",
    top: 535,
    left: 49,
    backgroundColor: "#f0c7a4",
    width: 299,
    height: 43,
  },
  rectanglePressable4: {
    position: "absolute",
    top: 411,
    left: 18,
    backgroundColor: "#f0c7a4",
    width: 358,
    height: 43,
  },
  repeatText: {
    position: "absolute",
    top: 535,
    left: 49,
    fontSize: 16,
    fontFamily: "Suez One",
    color: "#5e2d14",
    textAlign: "left",
    width: 71,
  },
  dateText: {
    position: "absolute",
    top: 421,
    left: 87,
    fontSize: 16,
    fontFamily: "Suez One",
    color: "rgba(94, 45, 20, 0.3)",
    textAlign: "left",
    width: 51,
  },
  titleText: {
    position: "absolute",
    top: 341,
    left: 49,
    fontSize: 16,
    fontFamily: "Suez One",
    color: "rgba(94, 45, 20, 0.3)",
    textAlign: "left",
    width: 51,
  },
  notesText: {
    position: "absolute",
    top: 382,
    left: 49,
    fontSize: 16,
    fontFamily: "Suez One",
    color: "rgba(94, 45, 20, 0.3)",
    textAlign: "left",
    width: 57,
  },
  timeText: {
    position: "absolute",
    top: 463,
    left: 87,
    fontSize: 16,
    fontFamily: "Suez One",
    color: "rgba(94, 45, 20, 0.3)",
    textAlign: "left",
    width: 52,
  },
  lineView: {
    position: "absolute",
    top: 363.5,
    left: 48.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderTopWidth: 1,
    width: 289,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    top: 455.99,
    left: 86.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderTopWidth: 1,
    width: 251,
    height: 1,
  },
  lineView2: {
    position: "absolute",
    top: 496.5,
    left: 86.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderTopWidth: 1,
    width: 251,
    height: 1,
  },
  lineView3: {
    position: "absolute",
    top: 404.5,
    left: 48.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderTopWidth: 1,
    width: 289,
    height: 1,
  },
  nestClockFarsightAnalogIcon: {
    position: "absolute",
    top: 467,
    left: 49,
    width: 24,
    height: 24,
  },
  calendarMonthIcon: {
    position: "absolute",
    top: 428,
    left: 49,
    width: 24,
    height: 24,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "83.46%",
    top: "63.15%",
    right: "13.99%",
    bottom: "34.95%",
    width: "2.54%",
    height: "1.9%",
    backgroundColor: "rgba(94, 45, 20, 0.5)",
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  deletePressable: {
    position: "absolute",
    left: 333,
    top: 105,
    width: 35,
    height: 35,
  },
  reminderView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AddReminder;