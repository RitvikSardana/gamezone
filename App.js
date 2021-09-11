import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import About from './screens/About';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';
//for fonts
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
//For Stack Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//For Drawer Navigation
// import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './shared/header';

const getFonts = () => Font.loadAsync({
  'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
});

const Stack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeRoutes ({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName = "Home"
      screenOptions = {{
        // headerStyle:{
        //   backgroundColor:'#eee',
        //   height:60
        // },
        // headerTitleAlign:'center',
        // headerTintColor:'#889', //color of text
        // headerTitleStyle:{
        //   fontWeight:'bold',
        //   alignText:'center'
        // },
      }}
    >
      <Stack.Screen 
        name = "HomeStack" 
        component = {Home}  
        options = {{
          header: props => <Header {...props} title='Gamezone' />,
          // title:'H'
          // headerStyle:{
          //   backgroundColor:'#1211ab'
          // }
          // headerLeft : () =>(
          //   <Button
          //     onPress={() => navigation.toggleDrawer()}
          //     title="menu"
          //     color="black"
          //   />
          // ),

        }}
      />
      <Stack.Screen 
        name = "ReviewDetails" 
        component = {ReviewDetails}
        options = {{
          headerStyle:{
            backgroundColor:'#11caaa'
          }
        }}  
      />
    </Stack.Navigator>
  )
}

function AboutRoutes({navigation}) {
  return (
      <AboutStack.Navigator initialRouteName="About">
        <AboutStack.Screen 
          name="AboutStack" 
          component={About} 
          options = {{
            header: props => <Header {...props} title='About' />,

          }}
        />
      </AboutStack.Navigator>
  );
}




export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)}
        onError = {console.log("Not Uploaded")} 
      />
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        screenOptions = {{
          headerShown:false
        }}
      >
        <Drawer.Screen name="Home" component={HomeRoutes} 
        />
        <Drawer.Screen name="About" component={AboutRoutes} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )


}

//ckt diagram, lit survey, components used, problem statement