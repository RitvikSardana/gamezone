import React, { useState } from 'react'
import { View, Text,Button,FlatList,TouchableOpacity,Modal, StyleSheet,Alert, Keyboard,TouchableWithoutFeedback } from 'react-native'
import Card from '../shared/Card'
import {globalStyles} from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import ModalForm from './ModalForm'




export default function Home({ navigation }) {
    
    const [modalVisible, setModalVisible] = useState(false);

    const [reviews,setReviews] = useState([
        {title:'Zelda',rating:'3',body:'Lorem Ipsum',key:'1'},
        {title:'Fifa 22',rating:'5',body:'Lorem Ipsum',key:'2'},
        {title:'Valorant',rating:'4',body:'Lorem Ipsum',key:'3'}
    ])

    const addReview = (review) =>{
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            // console.log(prevReviews,review)

            return [review,...prevReviews] // we werwe getting an objecgt only thats why we did not put {} here
            })
        setModalVisible(!modalVisible)
    }

    const deleteHandler = (key) =>{
        setReviews((prevReviews) => {
            // console.log(prevReviews)
            return prevReviews.filter((review) =>review.key !==key )
        })
    }

    return (
        <View style = {globalStyles.container}>

            <Modal
                animationType="slide"
                // transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                // setModalVisible(!modalVisible);
                // }}
            >
                <TouchableWithoutFeedback
                    onPress = {Keyboard.dismiss}
                > 
                    <View style = {globalStyles.modalContent}>
                        {/* Icon for closing modal */}      
                        <MaterialIcons 
                            name = "close"
                            size = {24}
                            style = {{...globalStyles.modalToggle,...globalStyles.modalClose}}

                            onPress = {() => setModalVisible(!modalVisible)}
                        />
                        {/* Modal Content */}
                        <ModalForm addReview = {addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            
            {/* Icon for opening modal */}
            <MaterialIcons 
                name = "add"
                size = {24}
                style = {globalStyles.modalToggle}
                onPress = {() => setModalVisible(!modalVisible)}
            />

            <FlatList 
                data = {reviews}
                renderItem = {({ item }) => (
                    <TouchableOpacity 
                        onPress= {() => navigation.navigate('ReviewDetails',item)}
                    >
                        <Card>
                            <View style = {globalStyles.homeCard}>
                                <Text style = {globalStyles.text}>{item.title}</Text>
                                <MaterialIcons name='delete'  size ={34} onPress = 
                                {() => deleteHandler(item.key)} />   
                            </View>
                        </Card>

                    </TouchableOpacity>
                )}
            />
            {/* <Button title = "hello" onPress = {pressHandlerPractice}  /> */}
        </View>
    )
}

