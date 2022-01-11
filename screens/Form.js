import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native'

export default function Form() {
    const handle = () => {
        Alert.alert("Successfully Registered")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Learn</Text>
                       <Text style={styles.text1}>Choose the part of the body</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
         paddingHorizontal: "15%",
       
    },
    text: {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: "Roboto",
        paddingBottom: "10%",
    }
    ,
    text1: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: "Roboto",
    }
   
})
