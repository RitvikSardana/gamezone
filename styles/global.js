import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container:{
        padding:24,
        marginTop:10,
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // flexDirection:'row'
    },
    text:{
        fontFamily:'ubuntu-regular',
        fontSize:24,
        color:'#331aac'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20
    },
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#aacef1',
        shadowOffset:{width:1,height:1}, //boxShadow
        shadowColor:'green',
        shadowOpacity:0.3,
        shadowRadius:2,
        margin:4,
        // justifyContent:'center',
        // alignItems:'center',
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,
        padding:20,
    },
    homeCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        // marginLeft:10,
        // flexWrap:'w'
    },
    modalContent:{
        flex:1,
        marginLeft:10
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2aacc',
        padding:10,
        alignSelf:'center',
        borderRadius:10
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,

    },
    input:{
        borderWidth:1,
        borderColor:'#a9a9a9',
        backgroundColor:'#a1c8fb',
        marginVertical:10,
        padding:20,
        borderRadius:25,
        fontSize:18
    },
    errorText:{
        // backgroundColor:'red'
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'
    }
});

export const globalImages = {
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png')
    }
}