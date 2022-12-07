import react from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import TabItem from "../TabItem";


const CustomBottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
          {/* <ImageBackground source={require('../../../assets/img/bottomNavigationBackground.png')} */}
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TabItem
              key={index}
              isFocused={isFocused}
              label={label}
              onPress={onPress}
              onLongPress={onLongPress}
              />
            );
          })}
        </View>
      );

}

export default CustomBottomNavigator;

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        paddingHorizontal:25,
        paddingVertical:5,
        justifyContent:'space-between',
        backgroundColor:'rgba(145,111,94,255)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      
    }
});