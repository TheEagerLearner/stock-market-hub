import React from 'react';
import {Text,StyleSheet,View,StatusBar} from 'react-native';
import GetStarted from '../components/Card/GetStarted';

const SplashScreen = ({navigation}) => {

    const des="All in one destination for stock Forecasting, Analysis and News";
    const head="STOCK MARKET HUB";

    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='#fff'
            />
            <Text 
                style={styles.heading}
            >
                {head}
            </Text>

            <Text
                style={styles.description}
            >
                {des}
            </Text>

            <GetStarted
                style={styles.btn}
                onPress={()=>{
                    console.log("Home");
                    navigation.navigate("Home");
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:18,
        
    },
    heading:{
        fontWeight:'bold',
        color:"#03314B",
        fontSize:42,
        marginTop:20
    },
    description:{
        fontWeight:'bold',
        color:"#03314B",
        fontSize:28,
        position:'absolute',
        bottom:180,
        marginLeft:20

    },
    btn:{
        position:'absolute',
        bottom:30,
        right:10,
        
    }
});

export default SplashScreen;