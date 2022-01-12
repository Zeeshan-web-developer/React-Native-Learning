import React, { Component } from 'react'
import { Text, View,StyleSheet, Image,Dimensions} from 'react-native'
export class SingleUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/user1.png')} style={styles.image}/>
                <View style={styles.user}>
                    <Text style={styles.text}>Harper Anderson</Text>
                    <Text style={styles.text}>+(342)-526-115</Text>
                </View>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#Fff',
        padding: 10,
        borderRadius: 10,
        elevation: 150,
        
    },
    image: {
        width: Dimensions.get('window').width/6,
        height: Dimensions.get('window').width/6,
        borderRadius: 50,
        marginRight: "3%",
    },
    text: {
        color: '#000',
        fontWeight: '500',
        paddingHorizontal: 10,
        fontSize: 16,
    },
    user: {
        
    }
})

export default SingleUser
