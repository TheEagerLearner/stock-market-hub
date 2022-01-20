import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import DetailCard from '../components/Card/DetailCard';

const SplashScreen = () => {

    return(
        <View style={stylesheet.mainView}>

        <DetailCard 
            high={100}
            low={200}
            open={100}
            current={150}
        />
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