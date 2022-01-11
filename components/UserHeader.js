import React, { Component } from 'react'
import { Text, TextInput, View ,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export class UserHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A39C9B" />
                <Icon name='search' size={32}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#F3EDF2',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    input: {
        flex: 1,
        marginBottom: "5%",
        paddingVertical: 5,

    }
})

export default UserHeader
