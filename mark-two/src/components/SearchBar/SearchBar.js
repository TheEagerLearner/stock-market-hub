import React, { useState } from 'react';
import {View,TextInput,StyleSheet,Button,Text,Icon} from 'react-native';
import { Feather } from '@expo/vector-icons';


/*
Usage
            <SearchBar 

                onChange={(value)=>{
                    console.log(value);
                    setStock(value);
                }}
                endEdit={()=>{
                    console.log(stock);
                }}

            />
*/

const SearchBar=({onChange,endEdit,style})=>{


    
    return(
    <View style={[stylesheet.input,style]}>
    <Feather style={stylesheet.iconStyle} name="search" size={30}/>
    <TextInput
        style={stylesheet.inputStyle} 
        placeholder="Enter Stock Name"
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newVal)=>{
            onChange(newVal)
        }}
        onEndEditing={()=>{
            endEdit()
        }}

    />
    </View>
    
    );
}

const stylesheet=StyleSheet.create({
    input:{
        borderWidth:1,
        height:50,
        backgroundColor:"#fff",
        margin:10,
        borderRadius:90,
        flexDirection:'row',
        justifyContent:'center'
    },
    iconStyle:{
        alignSelf:'center',
        marginHorizontal:10,
        color:'#8f959e',
        position:'absolute',
        right:10
    },
    inputStyle:{
        flex:1,
        marginLeft:50,
        fontSize:16,
        color:'black',
        
    }
});


export default SearchBar;