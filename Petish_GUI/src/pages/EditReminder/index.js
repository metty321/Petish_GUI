import React, { useState,useEffect } from "react";
import { StyleSheet,useWindowDimensions,View,Text,TextInput,Pressable,Image } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import DatePicker from 'react-native-date-picker'
import DatePicker from 'react-native-modern-datepicker';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";




const Repeat = ["none", "daily", "weekly", "monthly"]




const EditReminder = ( {route,navigation} ) =>{
  const {task_id} = route.params
    const {width,height} = useWindowDimensions();
    const [shouldShow, setShouldShow] = useState(false);
    const [info, setInfo] = useState('');
    const [title, setTitle] = useState('');
    const [repeat, setRepeat] = useState(Repeat[0]); 
    const [token, setToken] = useState('');
    const [timeDate, setTimeDate]= useState('');
    // const [selectedDate, setSelectedDate] = useState('');


    const DeleteTask= () =>{
      user.delete("/delete-task",{"id" : task_id},
      {headers: {'Authorization':"Bearer "+token}})
      .then(res => {
        console.log("delete res:",res)
        navigation.navigate("Calendar")
      })
  
      user.delete("/delete-task", {
        headers: {
          'Authorization':"Bearer "+token
        },
        data: {
          id : task_id
        }
      }).then(res => {
          console.log("delete res:",res)
          alert("Task Deleted")
          navigation.navigate("Calendar");
      })
    }
    
  
    const user= axios.create({
      baseURL:'https://petish-back.onrender.com/petish',
      headers:{
        'Authorization':"Bearer "+token
      }
    })
  
    useEffect(()=>{
      async function getToken(){
        const value = await AsyncStorage.getItem("AccessToken");
        setToken(value)
        console.log(task_id)
        
      }
      getToken();
    }, [])
    
    const EditPressed = () =>{
      const data = {
          id : task_id,
          title: title,
         date : timeDate,
        notes: info,  
        repeat: repeat 
      }    

      user.put('/update-task',data)
        .then(res => {
          
          console.log('res: ',res)
          setInfo("")
          alert('Task Updated')
          navigation.navigate("Calendar")
        }).catch(err => {
            // Handle error 
            console.log(err);
        })

    }
    
  

    return(

        <View style={styles.root}>
            <Text style={styles.pageTitle}>Edit Your Task</Text>
            <View style={[styles.input_Container,{width : width * 0.8, height: height*0.6}]}>
            <TextInput label='Task' 
                    placeholder='Title' 
                    placeholderTextColor='rgba(240, 199, 164, 0.5)'
                    value={title} 
                    onChangeText={setTitle} style={styles.nameInput}>
                </TextInput>
                <Pressable
        style={styles.deletePressable}
        onPress={DeleteTask}
      >
        <Image
          style={styles.icon1}
          resizeMode="contain"
          source={require("../../../assets/img/delete.png")}
        />
      </Pressable>
                
                <TextInput label='Task' 
                    placeholder='Notes' 
                    placeholderTextColor='rgba(240, 199, 164, 0.5)'
                    value={info} 
                    onChangeText={setInfo} style={styles.nameInput}>
                </TextInput>


                <View style={styles.inputContainer}>
                    <Text style={styles.input_Label}>Repeat</Text>
                    <SelectDropdown
                        data={Repeat}
                        
                        onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        setRepeat(selectedItem)
                        }}
                        defaultButtonText={'none'}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                        return item;
                        }}
                        buttonStyle={styles.dropdown2BtnStyle}
                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                        renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#F0C7A4'} size={10} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown2DropdownStyle}
                        rowStyle={styles.dropdown2RowStyle}
                        rowTextStyle={styles.dropdown2RowTxtStyle}
                    />
                </View> 

                <View style={styles.inputContainer}>
                    <Text style={styles.input_Label2}>Date</Text>
                    <Pressable
                style={styles.rectangleView5}
                 onPress={() => setShouldShow(!shouldShow)}>
                        <Text style={styles.OpenText}>Open</Text>
                     </Pressable>
                    {shouldShow ? (
                     <DatePicker
                     style={styles.dateContainer}
                     onSelectedChange={date => setTimeDate(date +":00")}
                   />):null
                    }

                                            
                </View>
                
                <View style={styles.rectangleView4} 
                onPress={()=> navigation.navigate('Calendar')}
                />
                <Text style={styles.AddText}
                onPress={EditPressed}>Edit</Text>
                
                <View style={styles.rectangleView3} 
                onPress={()=> navigation.navigate('Calendar')}
                />
                
                <Text style={styles.cancelText}
                onPress={()=> navigation.navigate('Calendar')}>Cancel</Text>
            
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    root:{
        flex:1,
        padding:20,
        flexDirection:'column',
        justifyContent:'space-around'
    },

    pageTitle:{
        textAlign:'center',
        marginTop:20,
        fontFamily:'SuezOne-Regular',
        fontSize:32,
        color:'#5E2D14'
    },
    
    input_Container:{
        backgroundColor:'rgba(145, 111, 94, 1)',
        alignSelf:'center',
        borderRadius:30,
        paddingVertical: 20,
        paddingHorizontal:30,
    },
    
    nameInput:{
        fontFamily:'SuezOne-Regular',
        fontSize:18,
        borderBottomColor:'rgba(0, 0, 0, 1)',
        borderBottomWidth:1,
        paddingVertical:1,
        marginBottom:15
    },

    input_Label:{
        fontFamily:'SuezOne-Regular',
        color: '#F0C7A4',
        alignSelf:'center',
        fontSize:18
    },
    input_Label2:{
      fontFamily:'SuezOne-Regular',
        color: '#F0C7A4',
        alignSelf:'center',
        marginTop:'10%',
        fontSize:18
    },

    inputContainer:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    dropdown2BtnStyle: {
        width: '40%',
        height: '100%',
        backgroundColor: '#FFF',
        borderRadius: 8,
      },
      dropdown2BtnTxtStyle: {
        fontFamily:'SuezOne-Regular',
        color: '#5E2D14',
        textAlign: 'center',
        fontSize:17,
        fontWeight: '600',
        
      },
      dropdown2DropdownStyle: {
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        
      },
      dropdown2RowStyle: {backgroundColor: '#FFF', borderBottomColor: '#C5C5C5'},
      dropdown2RowTxtStyle: {
        fontFamily:'SuezOne-Regular',
        color: '#5E2D14',
        textAlign: 'center',
        fontSize:17,
        fontWeight: '600'
      },

      rectangleView3: {
        position: "absolute",
        top: "90%",
        left: "70%",
        borderRadius: 20,
        backgroundColor: "#f0c7a4",
        width: 112,
        height: 48,
        justifyContent:'center',
        alignItems:'center'
      },

      rectangleView4: {
        position: "absolute",
        top: "90%",
        right: "70%",
        borderRadius: 20,
        backgroundColor: "#f0c7a4",
        width: 112,
        height: 48,
      },
      rectangleView5: {
        position: "absolute",
        top: "60%",
        left: "60%",
        borderRadius: 20,
        backgroundColor: "#f0c7a4",
        width: 112,
        height: 48,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonDown:{
        position:"absolute",
        top:'90%'
      },
      cancelText: {
        position: "absolute",
        top: "93%",
        left: "78%",
        fontSize: 20,
        fontFamily:'SuezOne-Regular',
        color: "#5e2d14",
        textAlign: "left",
        width: 68,
      },


      AddText: {
        position: "absolute",
        top: "93%",
        right: "78%",
        fontSize: 20,
        fontFamily:'SuezOne-Regular',
        color: "#5e2d14",
        textAlign: "center",
        width: 68,
      },
      OpenText:{
        fontSize: 20,
        fontFamily:'SuezOne-Regular',
        color: "#5e2d14",
        textAlign: "center",
        width: 68,
      },
      dateContainer:{
        position:'absolute',
        alignSelf:'center',
        borderRadius: 10,
        bottom:'20%'
        
      }

   })

export default EditReminder;