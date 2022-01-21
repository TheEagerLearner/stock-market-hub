import React,{useState} from 'react';
import {View,StyleSheet,Text,FlatList,StatusBar} from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import NewsCard from '../components/News/NewsCard';
import FocusCard from '../components/Card/FocusCard';

//Dummy data for now
const dummy='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const data=[
    {key:1,text:dummy},
    {key:2,text:dummy},
    {key:3,text:dummy},
    
];
const stockdata=[
    {
        key:1,
        name:'SAIL.NS',
        buy:true,
        current:100,
        open:102
    },
    {
        key:2,
        name:'TATAPOWER.NS',
        buy:false,
        current:100,
        open:102
    },
    {
        key:3,
        name:'GAIL.NS',
        buy:true,
        current:100,
        open:102
    },
    {
        key:4,
        name:'WIPRO',
        buy:false,
        current:100,
        open:102
    },


    
];


const Home = (props,{}) => {

    const [stock,setStock] = useState('');


    return(
        <View style={stylesheet.mainStyle}>
            
            <StatusBar 
                barStyle='light-content'
                backgroundColor='#222831'
            />

            <SearchBar 
                onChange={(value)=>{
                    console.log(value);
                    setStock(value);
                }}
                endEdit={()=>{
                    props.navigation.navigate('SearchScreen');
                }}
                style={stylesheet.searchbarStyle}
            />
            <Text style={stylesheet.explore}>Explore</Text>
            <View style={{
                marginRight:5,
            }}>
                <Text style={stylesheet.news}>News</Text>
                <FlatList 
                    keyExtractor={item=>item.key}
                    data={data}
                    renderItem={({item})=>{
                        return(
                            <NewsCard 
                            news={item.text}
                        />
                
                        );
                    }}
                />
            </View>

            <View style={{
                marginRight:5,
            }}>
                <Text style={stylesheet.focus}>Stocks in focus</Text>
                <FlatList 
                    keyExtractor={item=>item.key}
                    data={stockdata}
                    horizontal={true}
                    renderItem={({item})=>{
                        return(

                            <FocusCard 
                                name={item.name}
                                open={item.open}
                                current={item.current}
                                buy={item.buy}
                           />
            
                        );
                    }}
                />
            </View>

        </View>
    );
}

const stylesheet = StyleSheet.create({
    mainStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'#222831',
        //borderWidth:2,
        //borderColor:'white'
    },
    searchbarStyle:{
        marginTop:20,
    },
    explore:{
        margin:10,
        fontSize:26,
        //fontWeight:'bold',
        color:'white',
        borderBottomWidth:5,
        borderColor:'#A5A9FF',
        paddingBottom:10,
        marginRight:'50%',            

    },
    news:{
        marginLeft:10,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        marginTop:20,
        
    },
    focus:{
        marginLeft:10,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        marginTop:30,
    }
});

export default Home;