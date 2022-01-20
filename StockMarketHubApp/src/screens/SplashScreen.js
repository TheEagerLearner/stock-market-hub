import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const SplashScreen = () => {

    return(
        <View style={stylesheet.mainView}>
            <Text>Hello Saurabh</Text>
        </View>
    );
}

const stylesheet = StyleSheet.create({
    mainView:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
        
    }
});

export default SplashScreen;