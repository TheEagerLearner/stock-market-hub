import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from "react-native";
import  SearchBar  from '../components/SearchBar/SearchBar';

const Search = ({naviagtion}) => {

    const FocusStock=[
        {
            index:1,
            name:"SAIL.NS"
        
        },
        {
            index:2,
            name:"TATAPOWER.NS"
        
        },
        {
            index:3,
            name:"ADANIPOWER.NS"
        
        },
        {
            index:4,
            name:"RELIANCE.NS"
        
        },
        

    ];

    return(
        <View style={style.container}>
          <SearchBar 

            onChange={(value)=>{
                console.log(value);
                //setStock(value);
            }}
            endEdit={()=>{
                console.log("Hello");
            }}
            style={style.searchStyle}

        />
        <View style={style.stocksList}>
            <Text
                style={{
                    fontSize:18,
                    color:'#464646',
                    fontWeight:'bold'
                }}
            >Previously searched stocks</Text>

            <FlatList 
                    style={{
                        marginTop:20,
                    }}
                    keyExtractor={item=>item.index}
                    data={FocusStock}
                    horizontal={false}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity 
                                style={style.focus}
                                onPress={()=>{
                                    console.log(item.name);
                                }}
                            >
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    }}

            />
        </View>
        </View>
    );

}

const style = StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#fff',
    },
    searchStyle:{
        marginTop:20,
       
    },
    stocksList:{
        padding:20
    },
    focus:{
        borderBottomWidth:1,
        padding:10,
        marginBottom:6
    }
});

export default Search;