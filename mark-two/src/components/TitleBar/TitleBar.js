import React from 'react';
import {View,StyleSheet,Text,StatusBar,TouchableOpacity} from 'react-native';
import { Header } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

/*
Usage
        <TitleBar 
            title="Dashboard"
            onPress={()=>{console.log("Tapped")}}
            lightTheme={true}
            style={{
                color:'#fff',
                
            }}
        />
    
*/

const TitleBar = ({title,onPress,lightTheme,style,search,notif}) => {


    return(
        <View style={[style,stylesheet.appBar]}>
            <TouchableOpacity
                onPress={onPress}
            >
                <AntDesign name="arrowleft" size={30} color={lightTheme?'black':'white'} style={{marginLeft:10,}}
                    
                />
            </TouchableOpacity>
            <Text style={[{color:lightTheme?'black':'white'},stylesheet.titleStyle]}>{title}</Text>
            <AntDesign style={{ position:'absolute',right:60,}} name="search1" size={30} color="black" 
                onPress={search}
                
            />
            <Ionicons  style={{ position:'absolute',right:10,}} name="ios-notifications-outline" size={32} color="black" 
                onPress={notif}
            />

        </View>
    );
}

const stylesheet = StyleSheet.create({

    appBar:{
        height:Header.HEIGHT,//-StatusBar.currentHeight,
       // borderWidth:2,
        //marginTop:StatusBar.currentHeight,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    titleStyle:{
        //position:'absolute',
        //right:10,
        marginLeft:8,
        fontSize:24,
        fontWeight:'bold'
    }

});

export default TitleBar