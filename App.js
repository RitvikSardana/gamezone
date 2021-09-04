import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './screens/About';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouter } from 'react-navigation';

const getFonts = () => Font.loadAsync({
  'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
});

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator initialRouteName = "Home">
        
        <Stack.Screen name = "Home" component = {Home} /*options = {{title:'Overahahkak'}}*/  />
        <Stack.Screen name = "ReviewDetails" component = {ReviewDetails} />

      </Stack.Navigator>
      <StatusBar style="auto" />    
    </NavigationContainer>
  )


}

