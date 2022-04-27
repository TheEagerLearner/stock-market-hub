import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';


/*
    USAGE
           <FocusCard 
                name={'Sail.ns'}
                open={100}
                current={100.1}
                buy={true}
           />

*/

const FocusCard = ({name,open,current,buy}) =>{

    return(
        <View style={stylesheet.cardStyle}>
            <Text style={stylesheet.nameStyle}>{name}</Text>
            <View style={{
                borderWidth:0,
                position:'absolute',
                right:10,
                top:15,
                paddingHorizontal:8,
                paddingVertical:4,
                borderRadius:10,
                backgroundColor:buy?'#32c641':'#e93c31',
            }}>
                <Text
                    style={{fontWeight:'bold',color:'white'}}
                >{buy?'BUY':'SELL'}
                </Text>
            </View>

            <View style={stylesheet.row}>
                <View >
                    <View style={stylesheet.detailStyle}>
                        <Text style={{fontWeight:'bold',fontSize:16}}>High : </Text>
                        <Text style={{fontSize:16}}>{open}</Text>
                    </View>
                    
                    <View style={stylesheet.detailStyle}>
                        <Text style={{fontSize:16}}>Current Price : </Text>
                        <Text style={{fontWeight:'bold',fontSize:16}}>{current}</Text>
                    </View>
                </View>
            

            </View>
        
        </View>
    );
}

const stylesheet = StyleSheet.create({
    cardStyle:{
        padding:10,
        paddingBottom:18,
        borderWidth:0,
        borderRadius:20,
        margin:10,
        //marginTop:100,
        backgroundColor:'#7bd4fe',
        shadowColor:'#A5a9ff',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 24,
        width:250,
    },
    nameStyle:{
        marginLeft:15,
        fontWeight:'bold',
        marginBottom:0,
        fontSize:18,
        marginTop:10,
        
    },
    detailStyle:{
        flexDirection:'row',
        marginLeft:5,
        
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginRight:40,
    },
    

});

export default FocusCard;