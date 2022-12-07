import React from "react";
import { StyleSheet,useWindowDimensions,View,Text,
Image, Pressable } from "react-native";
import account from '../../../assets/img/account.png'



const UserProfile = ({navigation}) =>{
    
    return(
        <View style={styles.root}>
            <Text style={styles.pageTitle}>Profile</Text>
            <View style={styles.userInfo_Container}>
            
             <Text style={styles.jametusFaaktusText}>Jametus faaktus</Text>
            <Pressable
                style={styles.logOutPressable}
                onPress={() => navigation.navigate("Logout")}
            >
                <Text style={styles.logOutText}>Log Out</Text>
            </Pressable>
            <Text style={styles.jametus69gmailcomText}>jametus69@gmail.com</Text>
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

    pageTitle:{
        textAlign:'left',
        marginTop:20,   
        marginLeft:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },

    jametusFaaktusText: {
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
    jametus69gmailcomText: {
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


export default UserProfile;