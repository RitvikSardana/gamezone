import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
export default function About({navigation}) {
    return (
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.text}>About Screen</Text>
        </View>
    )
}

