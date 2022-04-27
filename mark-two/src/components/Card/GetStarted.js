import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const GetStarted = ({style,onPress}) => {
    return(
        <View style={[styles.main,style]}>
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles.button}>
                    <Text style={styles.textStyle}>GET STARTED</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 0
    },
    button:{
        width: 200,
        height: 75,
        backgroundColor: '#03314B',
        borderRadius: 20,
        shadowColor:'#A5a9ff',
        //flexDirection: 'row',
        //justifyContent:'center',
        alignItems:'center'
        //justifyContent: 'space-between'
        
    },

    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        flex: 3,
        textAlignVertical:'center',
        color:"#fff"
        //marginLeft: 20,
        
    },

    icon:{
        flex: 1,
        textAlignVertical:'center',

    }
})

export default GetStarted