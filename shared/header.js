import React from 'react'
import { View, Text,StyleSheet,Image,ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation,title}) {

    return (
        <View style = {styles.header} >
        {/* <ImageBackground style = {styles.header} source = {require('../assets/game_bg.png')}> */}

            {/* Icon  */}
            <MaterialIcons 
            name = "menu" 
            size = {28}
            onPress = {() => navigation.toggleDrawer()}
            style = {styles.icon}    
            />
            <View style ={styles.contentContainer} >
                <Image
                    source = {require('../assets/heart_logo.png')}
                    style = {styles.headerImage}
                />
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        {/* </ImageBackground> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        // width:'100%',
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#11caaa',
        // marginTop:35
    },
    contentContainer:{
        flexDirection:'row',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
        top:'8%',
        fontFamily:'ubuntu-regular',
    },
    icon:{
        position:'absolute',
        left:16,
        top:37
    },
    headerImage:{
        // position:'absolute',
        // size:24
        width:26,
        height:26,
        top:'10%',
        marginRight:10
    }
})
