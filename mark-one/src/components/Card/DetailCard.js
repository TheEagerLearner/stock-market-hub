import React from 'react';
import {View,StyleSheet,Text} from 'react-native'

const DetailCard = ({high,low,current,open}) =>{

    return(
    <View style={stylesheet.cardStyle}>
            
        <View style={stylesheet.row}>
            <View >
                <View style={stylesheet.detailStyle}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>High : </Text>
                    <Text style={{fontSize:18,color:'white'}}>{high}</Text>
                </View>
                
                <View style={stylesheet.detailStyle}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>Low : </Text>
                    <Text style={{fontSize:18,color:'white'}}>{low}</Text>
                </View>
            </View>
        

            <View>
                <View style={stylesheet.detailStyle}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>Open : </Text>
                    <Text style={{fontSize:18,color:'white'}}>{open}</Text>
                </View>
                
                <View style={stylesheet.detailStyle}>
                    <Text style={{fontSize:18,color:'white'}}>Current Price : </Text>
                    <Text style={{fontWeight:'bold',color:'white',fontSize:18}}>{current}</Text>
                </View>
            </View>
        </View>
    
    </View>

        );
}

const stylesheet = StyleSheet.create({
    cardStyle:{
        padding:18,
        paddingBottom:18,
        borderWidth:0,
        borderRadius:10,
        margin:20,
        //marginTop:100,
        backgroundColor:'#a5a9ff',
        width:'95%'
        
    },
    detailStyle:{
        flexDirection:'row',
        margin:0,
        
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginRight:40,
    },
    

});

export default DetailCard;