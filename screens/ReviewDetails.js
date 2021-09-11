import React from 'react'
import { View, Text,Button,Image,StyleSheet } from 'react-native'
import Card from '../shared/Card';
import { globalStyles,globalImages } from '../styles/global'


export default function ReviewDetails({ route }) {

    const item = route.params;

    // console.log(route)
    return (
        <View style = {globalStyles.container}>
            <Card>
                <View style = {styles.reviewInfo}>
                    <Text style = {{fontWeight:'bold'}}> {item.title} </Text>
                    <Text> {item.body}  </Text>
                </View>
                <View style = {styles.rating}>
                    <Text> GameZone Rating: </Text>
                    <Image 
                        source = {globalImages.ratings[item.rating]}
                    />
                </View>
                {/* <Button title = "pop it" onPress = {() => navigation.goBack('ReviewDetails')} /> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        borderTopWidth:1,
        marginTop:16,
        paddingTop:16,
        borderTopColor:'#eee'
    },
    reviewInfo:{
        justifyContent:'center',
        alignItems:'center'
    }
})
