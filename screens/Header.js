import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.text}>Payment</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingVertical: "12%",
        paddingHorizontal: "10%",
    }
    ,
    text: {
        fontSize: Dimensions.get('window').width / 15,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 2,
    }
})

