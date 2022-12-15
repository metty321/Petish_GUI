import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const EditUserProfile = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.editProfileView}>
            
            <View style={styles.rectangleView} />
        
            <Text style={styles.profileText}>Profile</Text>

            <Text style={styles.nameText}>Name</Text>
            <View style={styles.lineView} />
            <Text style={styles.usernameText}>Username</Text>
            <View style={styles.lineView1} />
            <Text style={styles.emailText}>Email</Text>
            <View style={styles.lineView2} />
            <Text style={styles.text}>******</Text>
            <Text style={styles.passwordText}>Password</Text>
            <Text style={styles.emailLabel}>jametus69@gmail.com</Text>
            <Text style={styles.usernameLabel}>jametus faaktus</Text>
            <Text style={styles.nameLabel}>Jamet</Text>
            <View style={styles.lineView3} />
            <Text style={styles.text1}>******</Text>
            <Text style={styles.confirmPasswordText}>Confirm Password</Text>
            <Text style={styles.saveText}>Save</Text>
            <Pressable
                style={styles.cancelPressable}
                onPress={() => navigation.navigate("UserProfile")}
            >
                <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Text style={styles.passwordShouldContainAtleas}>
                Password should contain atleast 8 characters!
            </Text>
            <View style={styles.lineView4} />
            <Text style={styles.usernameText1}>Jametus faaktus</Text>
            <Text style={styles.emailText1}>jametus69@gmail.com</Text>
            <Image
                style={styles.ellipseIcon1}
                resizeMode="cover"
                source={require("../../../assets/img/ellipse-25.png")}
            />
            <Pressable
                style={styles.borderColorPressable}
                onPress={() => navigation.navigate("EditProfile")}
            >
                <Image
                style={styles.icon4}
                resizeMode="contain"
                source={require("../../../assets/img/border-color.png")}
                />
            </Pressable>
            <Image
                style={styles.image3Icon}
                resizeMode="cover"
                source={require("../../../assets/img/image-3.png")}
            />
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    editProfileView: {
        position: "relative",
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden",
        padding: 20
    },

    profileText: {
        textAlign:'left',
        marginTop:20,   
        marginLeft:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },

    usernameLabel: {
        position: "absolute",
        top: 330,
        left: 73,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    lineView: {
        position: "absolute",
        top: 365,
        left: 67.5,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderTopWidth: 1,
        width: 259,
        height: 1,
    },
    nameLabel: {
        position: "absolute",
        top: 255,
        left: 73,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    lineView1: {
        position: "absolute",
        top: 290,
        left: 67.5,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderTopWidth: 1,
        width: 259,
        height: 1,
    },
    emailLabel: {
        position: "absolute",
        top: 405,
        left: 73,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    lineView2: {
        position: "absolute",
        top: 440,
        left: 67.5,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderTopWidth: 1,
        width: 259,
        height: 1,
    },
    text: {
        position: "absolute",
        top: 485,
        left: 73,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    passwordText: {
        position: "absolute",
        top: 455,
        left: 73,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.5)",
        textAlign: "left",
    },
    emailText: {
        position: "absolute",
        top: 380,
        left: 73,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.5)",
        textAlign: "left",
    },
    usernameText: {
        position: "absolute",
        top: 305,
        left: 73,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.5)",
        textAlign: "left",
    },
    nameText: {
        position: "absolute",
        top: 230,
        left: 73,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.5)",
        textAlign: "left",
    },
    lineView3: {
        position: "absolute",
        top: 510,
        left: 67.5,
        borderStyle: "solid",
        borderColor: "#d12c2c",
        borderTopWidth: 1,
        width: 259,
        height: 1,
    },
    text1: {
        position: "absolute",
        top: 570,
        left: 73,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    confirmPasswordText: {
        position: "absolute",
        top: 540,
        left: 73,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.5)",
        textAlign: "left",
    },
    saveText: {
        position: "absolute",
        top: 605,
        left: 285,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    cancelText: {
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    cancelPressable: {
        position: "absolute",
        left: 197,
        top: 605,
    },
    passwordShouldContainAtleas: {
        position: "absolute",
        top: 515,
        left: 73,
        fontSize: 10,
        fontFamily: "SuezOne-Regular",
        color: "#d12c2c",
        textAlign: "left",
    },
    lineView4: {
        position: "absolute",
        top: 595,
        left: 67.5,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderTopWidth: 1,
        width: 259,
        height: 1,
    },
    usernameText1: {
        position: "absolute",
        top: 135,
        left: 165,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    emailText1: {
        position: "absolute",
        top: 160,
        left: 165,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.3)",
        textAlign: "left",
    },
    ellipseIcon1: {
        position: "absolute",
        top: 115,
        left: 55,
        width: 103,
        height: 103,
    },
    icon4: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    borderColorPressable: {
        position: "absolute",
        left: "87.17%",
        top: "25.5%",
        right: "13.74%",
        bottom: "71.48%",
        width: "5.09%",
        height: "2.58%",
    },
    image3Icon: {
        position: "absolute",
        top: 135,
        left: 82,
        width: 50,
        height: 61.3,
    },
})

export default EditUserProfile;