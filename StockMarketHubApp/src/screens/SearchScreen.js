import React from 'react';
import {View,StyleSheet,Text,StatusBar} from 'react-native';
import DetailCard from '../components/Card/DetailCard';
import TitleBar from '../components/TitleBar/TitleBar';

const SearchScreen = (props,{}) => {

    const stockName=props.navigation.getParam('stockName');
    return(
        <View style={stylesheet.mainStyle}>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='#222831'
            />

        <TitleBar 
            title={stockName}
            onPress={()=>{props.navigation.navigate('Home')}}
            lightTheme={false}
            style={{
                color:'#fff',
                //borderWidth:2,
                //borderColor:'white',
                width:'100%'
                
            }}
        />


            <View
                style={stylesheet.graph}
            >

            </View>

            <DetailCard 
                high={100}
                open={102}
                low={100}
                current={111}
            />

        </View>
    );
}

const stylesheet = StyleSheet.create({
    mainStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'#222831',
        alignItems:'center'

    },
    graph:{
        width:'90%',
        height:'45%',
        borderWidth:2,
        borderColor:'white',
        borderRadius:30,
        backgroundColor:'#fff',        
    }
});

export default SearchScreen;