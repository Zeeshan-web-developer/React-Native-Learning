import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SingleItem from "./SingleItems"
export class Cart extends Component {
    render() {
        return (
            <View style={styles.cartContainer} >
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.mycart}>
                        <Icon name="cart" size={Dimensions.get("window").width/8}/>
                        <Text style={styles.cartText}>My Cart</Text>
                    </View>
                    <SingleItem/>
                    <SingleItem />
                     <SingleItem/>
                    <SingleItem />
                     <SingleItem/>
                    <SingleItem />
                     <SingleItem/>
                    <SingleItem/>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 20,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        borderBottomWidth: 1,
        elevation: 51,
    },
    mycart: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
    ,
    cartText: {
        fontSize: Dimensions.get('window').width / 15,
        fontWeight: 'bold',
        color: '#3A3239',
        marginLeft: Dimensions.get('window').width / 18,
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
    ,
     productText: {
        fontSize: Dimensions.get('window').width / 26,
         color: '#3A3239',
        marginLeft: Dimensions.get('window').width / 18,
    },
    priceSection: {
        alignItems: 'center',
        justifyContent:"center"
    },
    productPrice: {
        fontSize: Dimensions.get('window').width / 19,
        fontWeight: 'bold',
        color: '#3A3239',
    },
    priceIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

})
export default Cart
