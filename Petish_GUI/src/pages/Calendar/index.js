<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet,useWindowDimensions,View,Text,Image,ScrollView,RefreshControl } from "react-native";
import Logo from '../../../assets/img/Logo.png'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
//nanti bakal pake useEffect() buat render screen sesuai dengan input user
//referensi     : https://stackoverflow.com/questions/45478621/react-native-styling-with-conditional


// const onAddPressed=(navigat)=>{
    
//     alert('Button Pressed!');
    
// }
const ListItem = ({ title, notes,  date})=>{

  
    return(
        <View style={styles.item}>
                <Pressable style={styles.PetInfo} >
                <LinearGradient
                        style={styles.rectangleLinearGradient1}
                        locations={[0, 1]}
                        colors={["#f0c7a4", "rgba(240, 199, 164, 0)"]}
                        useAngle={true}
                        angle={112.63}>
                            
                            <Text> <Text style={styles.taskName}>{date}</Text></Text>
                            <Text> <Text style={styles.title}>{title}</Text></Text>
                            <Text> <Text >{notes}</Text></Text>
                    
                        {/* <Pressable
                        style={styles.pressable1}
                        onPress={() => navigation.navigate("Doggo1")}
                        /> */}
                        
                        
                    </LinearGradient>
                    </Pressable>
            </View> 
    )
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


const Calendar = ({ navigation }) =>{
    const {width,height} = useWindowDimensions();
    const [tasks, setTask] =useState([]);
    const [token, setToken] = useState('');
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(5000).then(() => setRefreshing(false));
  }, [])
 
    const user= axios.create({
        baseURL:'https://petish-back.onrender.com/petish',
        // headers:{
        //   'Authorization':"Bearer "+token
        // }
      })
    
    useEffect(()=>{
        async function getItem(){
          const value = await AsyncStorage.getItem("AccessToken");
          user.get("/get-all-task",{headers: {'Authorization':"Bearer "+value}})
          .then(res => {
            // console.log(res.data.task)
            for(let i=0; i<res.data.task.length; i++){
              var ndate = new Date(res.data.task[i].date).getDate() + "/" + new Date(res.data.task[i].date).getMonth() + "/" + new Date(res.data.task[i].date).getFullYear();
              var ntime = new Date(res.data.task[i].date).getHours() + ":" + new Date(res.data.task[i].date).getMinutes();
              res.data.task[i].date = ndate + " " + time;
              setDate(ndate)
              setTime(ntime)
              // console.log(ndate+ntime)
            }
            setTask(res.data.task)
            
            
            
          })
          
        }
        getItem();
      }, [])
      
      

    // useEffect(()=>{
    //     getData()
    // },[]);
    // const getData=()=>{
    //     axios.get('').then(res=>  {
    //         console.log('res: ',res)
    //         setPets(res.data)
    //     })
    // }
    
    return(

        // <Text>Pet Profile</Text>
        <View style={styles.root}>
        <Text style={styles.pageTitle}>Task Management</Text>
        
        <View style={[styles.AddPetContainer,{width : width * 0.7}]}>
        
            <View style={styles.AddPet}>
            <Pressable  onPress={()=> navigation.replace('AddToDoList')}>
            <Text style={styles.addNow}>+</Text>
            </Pressable>
            </View>
        
        <Text style={styles.addPet_Text}>Add task</Text>
        </View>
      <Image source={Logo} style={[styles.Logo,{height : height * 0.3}]} resizeMode= 'contain'/>

      
      
      <View style={styles.itemContainer}>  
      <ScrollView 
      contentContainerStyle={{ paddingBottom: 50 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.scrollContainer} >
      {tasks.map(task => {
        return <ListItem title={task.title} notes={task.notes} date={task.date}/>
      })} 
        </ScrollView> 
      </View>
      
        </View>
      
=======
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
>>>>>>> b182b48218f3ce21d949a03876a0f7a0de4bad5a
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
<<<<<<< HEAD
        padding:20,
    },

    addPet_Text:{
        textAlign:'center',
        fontFamily:'SuezOne-Regular',
        color:'#5E2D14',
        fontSize:18
    },

    AddPetContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:30,
        top: "10%",
        right: "3%"
     },

    Logo:{
        zIndex:-999,
        alignSelf:'center',
        bottom: "5%",
        width:'70%',
        height:100,
        maxHeight:1000,
        maxWidth:2000,
        marginTop:'30%',
        opacity:0.4
    },

    addNow:{
        textAlign:'center',
        top: -2,
        fontSize:30,
        color:'white',
        fontFamily:'SuezOne-Regular'
=======
        padding:20
>>>>>>> b182b48218f3ce21d949a03876a0f7a0de4bad5a
    },

    pageTitle:{
        textAlign:'center',
        marginTop:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },
<<<<<<< HEAD
    AddPet:{
        width: 50,
    height: 50,
    borderRadius: 50/ 2,
    backgroundColor: 'rgba(145, 111, 94, 1)',
    justifyContent:'center',
    alignContent:'center'
    },
    itemContainer:{
        // overflow: 'hidden',
        
        position:'absolute',
        top:'40%',
        alignItems:"center",
        // justifyContent:'center',
        width:'100%',
        height:'60%',
        alignSelf:'center',
        
        
    },
    item:{
        flexDirection:'row',
        width:'100%',
        height:150,
        borderRadius:30,
        backgroundColor:"white",
        marginVertical:10
    },
    taskName: {
        position: "absolute",
        top: 160,
        left: 100,
        fontSize: 25,
        fontFamily: "Calligraffitti-Regular",
        color: "#5e2d14",
        textAlign: "center",
    },
    dog1Icon: {
        position: "absolute",
        top: 10,
        left: 200,
        width: 100,
        height: 100,
    },
    rectangleLinearGradient1: {
        width: '100%',
        height: '100%',
        borderRadius:20,
        padding:20
    },
    scrollContainer:{
        flex:1
    },
    PetInfo:{
        width:'100%',
        height:150
    },
    title:{
      textAlign:'left',
        fontFamily:'SuezOne-Regular',
        color:'#5E2D14',
        fontSize:18,
        marginBottom:20
    }
   
   })
=======
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
>>>>>>> b182b48218f3ce21d949a03876a0f7a0de4bad5a

export default Calendar;