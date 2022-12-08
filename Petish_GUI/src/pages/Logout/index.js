import React from "react";
import { StyleSheet,useWindowDimensions,View,Text,
Image, Pressable } from "react-native";
import account from '../../../assets/img/account.png'



const Logout = ({navigation}) =>{
    
    return(
        <View style={styles.root}>
            <View style={styles.rectangleView} />
            <Text style={styles.pageTitle}>Profile</Text>
            <View style={styles.userInfo_Container}>
            
            <View style={styles.logoutConfirm}>
                <Pressable
                    style={styles.areYouSure1}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text style={styles.areYouSure}>Are you sure?</Text>
                </Pressable>
                <Pressable
                    style={styles.yesPressable}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.yesText}>Yes</Text>
                </Pressable>
                <Pressable
                    style={styles.noPressable}
                    onPress={() => navigation.navigate("UserProfile")}
                >
                    <Text style={styles.noText}>No</Text>
                </Pressable>
            </View>
           
            
             <Text style={styles.usernameText}>Jametus faaktus</Text>
            <Pressable
                style={styles.logOutPressable}
                onPress={() => navigation.navigate("Logout")}
            >
                <Text style={styles.logOutText}>Log Out</Text>
            </Pressable>
            <Text style={styles.emailText}>jametus69@gmail.com</Text>
            <Image
                style={styles.ellipseIcon1}
                resizeMode="cover"
                source={require("../../../assets/img/ellipse-25.png")}
            />
            <Pressable
                style={styles.borderColorPressable}
                onPress={() => navigation.navigate("editUserProfile")}
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
        </View>
    );
    
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20
    },

    rectangleView: {
        position: "absolute",
        top: 320,
        left: 0,
        borderRadius: 40,
        backgroundColor: "#916f5e",
        width: 415,
        height: 507,
     },

    logoutConfirm: {
        top: -150,
        left: -15
    },

    areYouSure: {
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#fff",
        textAlign: "center",
    },
    areYouSure1: {
        position: "absolute",
        left: 134,
        top: 419,
        alignContent: 'center',
    },
    yesText: {
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#fff",
        textAlign: "left",
    },
    yesPressable: {
        position: "absolute",
        left: 210,
        top: 457,
    },
    noText: {
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#fff",
        textAlign: "left",
    },
    noPressable: {
        position: "absolute",
        left: 152,
        top: 457,
    },

    pageTitle:{
        textAlign:'left',
        marginTop:20,   
        marginLeft:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },

    usernameText: {
        position: "absolute",
        top: 80,
        left: 150,
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#5e2d14",
        textAlign: "left",
    },
    logOutText: {
        fontSize: 20,
        fontFamily: "SuezOne-Regular",
        color: "#d12c2c",
        textAlign: "left",
        top: -120
    },
    logOutPressable: {
        position: "absolute",
        left: 255,
        top: 311,
    },
    emailText: {
        position: "absolute",
        top: 110,
        left: 150,
        fontSize: 13,
        fontFamily: "SuezOne-Regular",
        color: "rgba(94, 45, 20, 0.3)",
        textAlign: "left",
    },

    ellipseIcon1: {
        position: "absolute",
        top: 55,
        left: 35,
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
        left: 288,
        top: 102,
        width: "20.09%",
        height: "20.58%",
    },
    image3Icon: {
        position: "absolute",
        top: 73,
        left: 62,
        width: 50,
        height: 61.3,
    },
   
   })


export default Logout;