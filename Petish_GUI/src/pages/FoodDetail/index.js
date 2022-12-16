import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FoodDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainMenuFood}>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../../../assets/img/image-1.png")}
      />
      <View style={styles.whiskasForKitten}>
        <Text style={styles.whiskasText}>Whiskas</Text>
        <Text style={styles.forKittenText}>for kitten</Text>
      </View>
      <View style={styles.rectangleView} />
      <Text style={styles.descriptionText}>Description</Text>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("Food")}
      >
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../../../assets/img/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    position: "absolute",
    top: 140,
    left: "35%",
    width: 100,
    height: 200,
  },
  whiskasText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    fontFamily: "SuezOne-Regular",
    color: "#5e2d14",
    fontSize: 40,
    alignSelf: "center"
  },
  forKittenText: {
    margin: 0,
    fontFamily: "SuezOne-Regular",
    color: "#5e2d14",
    fontSize: 40,
    alignSelf: "center"
  },
  whiskasForKitten: {
    position: "absolute",
    top: 350,
    left: 105,
    fontSize: 40,
    fontFamily: "SuezOne-Regular",
    color: "#5e2d14",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 480,
    left: 40,
    borderRadius: 30,
    backgroundColor: "#f0c7a4",
    width: 319,
    height: 291,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  descriptionText: {
    position: "absolute",
    top: 500,
    left: 154,
    fontSize: 15,
    fontFamily: "SuezOne-Regular",
    color: "#5e2d14",
    textAlign: "left",
    alignSelf: 'center',
    justifyContent: 'center'
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
    left: "6.11%",
    top: "13.03%",
    right: "90.08%",
    bottom: "84.12%",
    width: "3.82%",
    height: "2.85%",
  },
  mainMenuFood: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default FoodDetail;
