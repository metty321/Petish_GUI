import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet,useWindowDimensions,View,Text,Image,ScrollView,RefreshControl } from "react-native";
import Logo from '../../../assets/img/Logo.png'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
//nanti bakal pake useEffect() buat render screen sesuai dengan input user
//referensi     : https://stackoverflow.com/questions/45478621/react-native-styling-with-conditional


// const onAddPressed=(navigat)=>{
    
//     alert('Button Pressed!');
    
// }
const ListItem = ({ title, notes,  date,id})=>{
  const navigation = useNavigation();
  
    return(
        <View style={styles.item}>
                <Pressable style={styles.PetInfo} onPress={() => navigation.replace("EditTaskList",
                {
                  task_id:id
                }
                )} >
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
    const [isLoading, setIsLoading]= useState(true);

    const getContent=()=>{
      if(isLoading)
      {return <ActivityIndicator size="large"/>;}
    }

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
              setIsLoading(false)
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
      {getContent()}
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
        return <ListItem title={task.title} notes={task.notes} date={task.date} id={task._id}/>
      })} 
        </ScrollView> 
      </View>
      
        </View>
      
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
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
    },

    pageTitle:{
        textAlign:'center',
        marginTop:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },
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

export default Calendar;