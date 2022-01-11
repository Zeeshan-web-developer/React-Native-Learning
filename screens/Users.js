import React, { Component } from 'react'
import { Text, View ,StyleSheet,ScrollView} from 'react-native'
import SingleUser from '../components/SingleUser'
import UserHeader from '../components/UserHeader'

export class Users extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                <UserHeader />
                <SingleUser />
                <SingleUser />
                <SingleUser />
                <SingleUser />
                <SingleUser/>
                <SingleUser />
                <SingleUser />
                <SingleUser />
                </View>
               
                </ScrollView>
        )
    }
        
}
const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    container2: {
        flex: 1,
        alignItems: 'center',
    }
})
export default Users
