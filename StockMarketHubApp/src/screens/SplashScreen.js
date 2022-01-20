import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import FocusCard from '../components/Card/FocusCard';
import SummaryCard from '../components/Card/SummaryCard';

const SplashScreen = () => {

    return(
        <View style={stylesheet.mainView}>
           <FocusCard 
                name={'Sail.ns'}
                open={100}
                current={100.1}
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