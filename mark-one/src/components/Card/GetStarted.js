import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const GetStarted = ({style,onPress}) => {
    return(
        <View style={[styles.main,style]}>
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles.button}>
                    <Text style={styles.textStyle}>GET STARTED</Text>
                    <AntDesign name="right" size={30} color="black" style={styles.icon} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 100
    },
    button:{
        width: 200,
        height: 75,
        backgroundColor: '#7bd4fe',
        borderRadius: 20,
        shadowColor:'#A5a9ff',
        flexDirection: 'row',
        //justifyContent: 'space-between'
        
    },

    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        flex: 3,
        textAlignVertical:'center',
        marginLeft: 20,
        
    },

    icon:{
        flex: 1,
        textAlignVertical:'center',

    }
})

export default GetStarted