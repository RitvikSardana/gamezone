import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function ButtonComponent({ text,buttonHandler }) {
    return (
        <TouchableOpacity onPress = {buttonHandler}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderColor:'black',
        paddingVertical:12,
        paddingHorizontal:16,
        backgroundColor:'#f01d71',
        borderRadius:18
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        textTransform:"uppercase",
        fontSize:16
    }
})