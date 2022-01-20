import React, { useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';

/*
        <NewsCard 
            news={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum More.'}
        />

*/

const NewsCard=({news})=>{


    
    return(
    <View style={stylesheet.mainStyle}>
    
        <Text>{news}</Text>

    </View>
    );
}

const stylesheet=StyleSheet.create({
mainStyle:{
    borderLeftWidth:5,
    justifyContent:'center',
    padding:10,
    width:'100%',
    //marginTop:100,
    borderColor:'#A5A9FF',
    margin:10,
    
}
});


export default NewsCard;