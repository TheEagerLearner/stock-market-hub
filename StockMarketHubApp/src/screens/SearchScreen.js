import React from 'react';
import {View,StyleSheet,Text,StatusBar} from 'react-native';
import DetailCard from '../components/Card/DetailCard';
import TitleBar from '../components/TitleBar/TitleBar';

const SearchScreen = ({}) => {

    return(
        <View style={stylesheet.mainStyle}>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='#222831'
            />

        <TitleBar 
            title="Dashboard"
            onPress={()=>{console.log("Tapped")}}
            lightTheme={true}
            style={{
                color:'#fff',
                
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