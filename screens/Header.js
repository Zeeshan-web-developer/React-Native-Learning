import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.text}>Welcome Back!</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingVertical: "12%",
    }
    ,
    text: {
        fontSize: Dimensions.get('window').width / 15,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 2,
    }
})

