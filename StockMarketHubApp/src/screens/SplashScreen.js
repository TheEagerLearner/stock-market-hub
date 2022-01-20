import React, { useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';


const SplashScreen = () => {

    const [stock,setStock] = useState('');

    return(
        <View style={stylesheet.mainView}>



        </View>
    );
}

const stylesheet = StyleSheet.create({
    mainView:{
        //justifyContent:'center',
        //alignItems:'center',
        height:'100%',
        width:'100%',
        
    }
});

export default SplashScreen;