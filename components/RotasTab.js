import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity, ImageBackground } from 'react-native';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DragonBall from "./DragonBall";
import Home from "./Home";
import Narutin from "./Narutin";


const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} style= {styles.footer}>
    <Tab.Screen name="Dragonball"component={DragonBall} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "fire" color={color} size={size}/>}}/>
      <Tab.Screen name="Home"component={Home} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "home" color={color} size={size}/>}}/>
    <Tab.Screen name="Narutin"component={Narutin} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "water" color={color} size={size}/>}}/>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
      footer:{
        backgroundColor: '#000000'
      }
});