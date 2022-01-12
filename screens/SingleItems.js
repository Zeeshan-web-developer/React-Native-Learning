import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export class Cart extends Component {
    render() {
        return (
            
                    <View style={styles.product}>
                         <View style={{flexDirection:"row"}}>
                        <Icon name="cart" size={Dimensions.get("window").width / 8} />
                        <View >
                        <Text style={styles.productText}>Air Pods</Text>
                        <Text style={styles.productText}>Apple</Text>
                       </View>
                        </View>
                       <View style={styles.priceSection}>
                            <Text style={styles.productPrice}>$1399</Text>
                            <View style={styles.priceIcons}>
                                <Icon name="add-circle" size={32} />
                              <Text style={{fontSize:25}}>2</Text>
                            <Icon name="remove-circle" size={32} />

                            </View>
                        </View>
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
