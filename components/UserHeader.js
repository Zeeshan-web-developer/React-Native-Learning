import React, { Component } from 'react'
import { Text, TextInput, View ,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export class UserHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#A39C9B" />
                <Icon name='search' size={32}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3EDF2',
        borderRadius: 10,
        paddingHorizontal: 10,
        
    },
    input: {
        flex: 1,
        padding: 10,
    }
})

export default UserHeader
