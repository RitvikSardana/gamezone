import React, { useState } from 'react'
import { View, Text,Button,FlatList,TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'

export default function Home({ navigation }) {
    
    const [reviews,setReviews] = useState([
        {title:'Zelda,Breath of Fresh Air',rating:'3',body:'Lorem Ipsum',key:'1'},
        {title:'Fifa 22',rating:'5',body:'Lorem Ipsum',key:'2'},
        {title:'Valorant',rating:'4',body:'Lorem Ipsum',key:'3'}

    ])

    // const pressHandlerPractice = () =>{
    //     navigation.navigate('ReviewDetails')
    //     //navigation.push for going to a page again
    // }
    
    return (
        <View style = {globalStyles.container}>
            <FlatList 
                data = {reviews}
                renderItem = {({ item }) => (
                    <TouchableOpacity 
                        onPress= {() => navigation.navigate('ReviewDetails',item)}
                    >
                        <Text style = {globalStyles.text}>{item.title}</Text>   
                    </TouchableOpacity>
                )}
            />
            {/* <Button title = "hello" onPress = {pressHandlerPractice}  /> */}
        </View>
    )
}

