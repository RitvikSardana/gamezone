import React from 'react'
import { View, Text,Button } from 'react-native'
import { globalStyles } from '../styles/global'


export default function ReviewDetails({ navigation,route}) {

    const item = route.params;

    console.log(route)
    return (
        <View style = {globalStyles.container}>
            <Text> {item.title} </Text>
            <Text> {item.body}  </Text>
            <Text> {item.rating}</Text>
 

            {/* <Button title = "pop it" onPress = {() => navigation.goBack('ReviewDetails')} /> */}
        </View>
    )
}


