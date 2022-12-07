import React from "react";
import { StyleSheet,useWindowDimensions,View,Text,Image,Pressable } from "react-native";

const Food = () =>{
    
    return(
        <View style={styles.root}>
            <Text style={styles.pageTitle}>Food</Text>
        
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
            <View style={styles.rectangleView6} />
        
            <View style={styles.rectangleView7} />
            <Text style={styles.searchText}>Search</Text>
            <Text style={styles.catText}>Cat</Text>
            <Text style={styles.dogText}>Dog</Text>
            <Text style={styles.hamsterText}>Hamster</Text>
            <Image
                style={styles.vectorIcon}
                resizeMode="contain"
                source={require("../../../assets/img/vector19.png")}
            />
            <Pressable
                style={styles.image1Pressable}
                //onPress={() => navigation.navigate("MainMenuFood")}
            >
                <Image
                style={styles.icon4}
                resizeMode="cover"
                source={require("../../../assets/img/image-11.png")}
                />
            </Pressable>
            <Image
                style={styles.image2Icon}
                resizeMode="cover"
                source={require("../../../assets/img/image-2.png")}
            />
            <View style={styles.rectangleView8} />
            <View style={styles.rectangleView9} />
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

    rectangleView: {
    position: "absolute",
    top: 759,
    left: 0,
    borderRadius: 40,
    backgroundColor: "#916f5e",
    width: 393,
    height: 132,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  transparentVeterinarianVeterPressable: {
    position: "absolute",
    left: 242,
    top: 771,
    width: 55,
    height: 55,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  addressCardIcon1Pressable: {
    position: "absolute",
    left: 311,
    top: 784,
    width: 45,
    height: 27.6,
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  pngItem6407482Pressable: {
    position: "absolute",
    left: 41,
    top: 778,
    width: 45,
    height: 40.56,
  },

  icon3: {
    width: "100%",
    height: "100%",
  },
  calendarLightBrown1: {
    position: "absolute",
    left: 104,
    top: 767,
    width: 61,
    height: 61,
  },
  rectangleView1: {
    position: "absolute",
    top: "20%",
    left: "10%",
    borderRadius: 20,
    backgroundColor: "#f0c7a4",
    width: 337,
    height: 33,
  },
  rectangleView2: {
    position: "absolute",
    top: "30%",
    left: 28,
    borderRadius: 10,
    backgroundColor: "#916f5e",
    width: 89,
    height: 36,
  },
  rectangleView3: {
    position: "absolute",
    top: "30%",
    left: 135,
    borderRadius: 10,
    backgroundColor: "#916f5e",
    width: 89,
    height: 36,
  },
  rectangleView4: {
    position: "absolute",
    top: "30%",
    left: 243,
    borderRadius: 10,
    backgroundColor: "#916f5e",
    width: 89,
    height: 36,
  },
  rectangleView5: {
    position: "absolute",
    top: "30%",
    left: 351,
    borderRadius: 10,
    backgroundColor: "#916f5e",
    width: 89,
    height: 36,
  },
  rectangleView6: {
    position: "absolute",
    top: "42%",
    left: "10%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 158,
    height: 194,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 409,
    left: 262,
    width: 51,
    height: 51,
    backgroundColor: "#f0c7a4",
  },
  rectangleView7: {
    position: "absolute",
    top: "42%",
    left: "58%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 158,
    height: 194,
  },
  searchText: {
    position: "absolute",
    top: "21%",
    left: 53,
    fontSize: 16,
    fontFamily: "SuezOne-Regular",
    color: "rgba(94, 45, 20, 0.5)",
    textAlign: "left",
  },
  catText: {
    position: "absolute",
    top: "31.3%",
    left: 59,
    fontSize: 16,
    fontFamily: "SuezOne-Regular",
    color: "#fff",
    textAlign: "left",
  },
  dogText: {
    position: "absolute",
    top: "31.3%",
    left: 164,
    fontSize: 16,
    fontFamily: "SuezOne-Regular",
    color: "#fff",
    textAlign: "left",
  },
  hamsterText: {
    position: "absolute",
    top: "31.3%",
    left: 254,
    fontSize: 16,
    fontFamily: "SuezOne-Regular",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "3.76%",
    width: "3.82%",
    top: "21%",
    right: "15.52%",
    bottom: "80.4%",
    left: "88.66%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%"
  },
  icon4: {
    width: "100%",
    height: "100%",
  },
  image1Pressable: {
    position: "absolute",
    left: "11%",
    top: "45%",
    width: 145,
    height: 160,
  },
  image2Icon: {
    position: "absolute",
    top: "47%",
    left: "70%",
    width: 70,
    height: 144.03,
  },
  mainMenuFood: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  rectangleView8: {
    position: "absolute",
    top: "82%",
    left: "10%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 158,
    height: 194,
  },
  rectangleView9: {
    position: "absolute",
    top: "82%",
    left: "58%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 158,
    height: 194,
  },
   
   })

export default Food;