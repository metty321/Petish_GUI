import React, { useState } from "react";
import { StyleSheet,useWindowDimensions,View,Text,TextInput,Platform, TouchableOpacity } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';


const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Male',
    value: 'male',
    size :12,
    borderColor: '#F0C7A4',
    color:'#F0C7A4'
}, {
    id: '2',
    label: 'Female',
    value: 'female',
    size :12,
    borderColor:'#F0C7A4' ,
    color:'#F0C7A4'
}]


const Pet = ["Dog", "Cat", "Rabbit", "Hamster","Other"]



const AddPets = ( {navigation} ) =>{
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    const [petName, setpetName] = useState('');
    const [petType, setPetType] = useState(Pet[0]);
    const {width,height} = useWindowDimensions();
    
    
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    return(

        <View style={styles.root}>
            <Text style={styles.pageTitle}>Add Your Pets</Text>
            <View style={[styles.input_Container,{width : width * 0.8, height: height*0.6}]}>
                <TextInput label='Username' 
                    placeholder='Pet Name' 
                    placeholderTextColor='rgba(240, 199, 164, 0.5)'
                    value={petName} 
                    onChangeText={setpetName} style={styles.nameInput}>
                </TextInput>

                <View style={styles.inputContainer}>
                    <Text style={styles.input_Label}>Sex</Text>
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={onPressRadioButton} 
                        layout='row'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.input_Label}>Pet Type</Text>
                    <SelectDropdown
                        data={Pet}
                        
                        onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        setPetType(selectedItem)
                        }}
                        defaultButtonText={'Dog'}
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
                    <Text style={styles.input_Label}>Date of Birth</Text>
                    
                </View>
                
                <View style={styles.rectangleView3} 
                onPress={()=> navigation.navigate('Pet_Profile')}
                />
                <Text style={styles.cancelText}
                onPress={()=> navigation.navigate('Pet_Profile')}>Cancel</Text>
            
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
        paddingVertical:1
    },

    input_Label:{
        fontFamily:'SuezOne-Regular',
        color: '#F0C7A4',
        alignSelf:'center',
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

   })

export default AddPets;