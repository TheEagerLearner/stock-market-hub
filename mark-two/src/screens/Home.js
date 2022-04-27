import React from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';
import TitleBar from '../components/TitleBar/TitleBar';


const Home = ({navigation}) => {

    return(
        <View style={style.container}>
        <StatusBar 
            barStyle='dark-content'
            backgroundColor='#fff'
        />
        
        <TitleBar 
            title="Home"
            onPress={()=>{console.log("Tapped")}}
            lightTheme={true}
            style={{
                color:'#fff',
                
            }}
            search={()=>{
                navigation.navigate("Search");
            }}
            notif={
                ()=>{
                    console.log("Notification");
                    navigation.navigate("Notification");
                }
            }
        />


        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
});

export default Home;