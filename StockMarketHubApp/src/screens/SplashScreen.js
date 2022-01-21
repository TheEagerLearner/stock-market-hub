import React, { useState } from 'react';
import {View,StyleSheet,Text,Image,StatusBar} from 'react-native';
import GetStarted from '../components/Card/GetStarted';

const SplashScreen = () => {

    const [stock,setStock] = useState('');

    return(
        <View style={stylesheet.mainView}>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='#222831'
            />
            <View style={stylesheet.headingStyle}>
                <Text style={stylesheet.headStyle}>Stock</Text>
                <Text style={stylesheet.headStyle}>Market Hub</Text>
            </View>

            <Image 
                style={stylesheet.imageStyle} 
                source={require('../../assets/stock.png')} 
            />

            <View style={stylesheet.subheadingStyle}>
                <Text style={stylesheet.subheadStyle}>We hope to help beginners take better decisions</Text>
                
            </View>

            <GetStarted 
                style={stylesheet.buttonStyle}
                onPress={()=>{console.log("Get Started tapped")}}
            />

        </View>
    );
}

const stylesheet = StyleSheet.create({
    mainView:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#222831',
        //borderWidth:1,
        //borderColor:'white'

    },
    imageStyle:{
        width:'90%',
        height:'40%',

        
    },
    headingStyle:{
        position:'absolute',
        top:30,
        left:20,

    },
    headStyle:{
        color:'white',
        fontSize:44,
        textAlign:'left',
        fontWeight:'bold',
        fontFamily:'notoserif'
        
    },
    subheadingStyle:{
        position:'relative',
        //top:20,
        //left:20,
        //width:'90%',
        marginLeft:20,
        marginTop:10,
        

    },
    subheadStyle:{
        color:'white',
        fontSize:26,
        textAlign:'left',
        //fontWeight:'bold',
        fontFamily:'Roboto',
        //borderWidth:1,
        //borderColor:'white'
        
    },
    buttonStyle:{
        position:'absolute',
        bottom:'-8%',
        right:'-20%',
        //borderWidth:2,
        //borderColor:'white'
    }
});

export default SplashScreen;