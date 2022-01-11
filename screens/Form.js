import React from 'react'
import { Button, StyleSheet, Text, TextInput,Keyboard ,Dimensions,View,Alert, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default function Form() {
    const handle = () => {
        Alert.alert("Successfully Registered")
    }
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <View>
                     <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A39C9B" />
                     <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A39C9B" />
                 </View>
            <Text style={styles.forgot}>Forgot Password ?</Text>
            <Button title="Login" style={styles.button} color="#A6279B" />
            <View style={styles.social}>
                <Icon name="md-logo-facebook" size={32} color="#A39C9B"/> 
                <Icon name="md-logo-twitter" size={32} color="#A39C9B"/>
                <Icon name="md-logo-google" size={32} color="#A39C9B"/>
           </View>
           
            <View style={styles.footer}>
                <Text style={styles.text2}>Don't have an account?</Text>
                <Text style={styles.text3}>Sign Up</Text>
            </View>
            </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
         paddingHorizontal: "15%",
       
    },
    text: {
        fontSize: Dimensions.get('window').width / 15,
        color: '#fff',
        fontWeight: 'bold',
        paddingBottom: "5%",
    }
    ,
    input: {
        backgroundColor: '#272423',
        width: "100%",
        borderRadius: 5,
        paddingHorizontal: "5%",
        height: Dimensions.get('window').width / 10,
        fontSize: Dimensions.get('window').width / 20,
        color: '#A39C9B',
        marginVertical: "5%",
    }
    ,
    forgot: {
        fontSize: Dimensions.get('window').width / 20,
        color: '#A6279B',
        textAlign: 'right',
        paddingBottom: "15%",
    },
    button: {
        width: "100%",
        borderRadius: 8,
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 17,
        color: '#fff',
        

    }
    ,
    social: {
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: "10%",
        paddingHorizontal:"20%",
    },
    text2: {
        fontSize: Dimensions.get('window').width / 25,
        color: '#fff',
        fontWeight: '300',
        paddingBottom: "5%",
        textAlign: 'center',
    }
    
    ,
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
    ,
    text3: {
          fontSize: Dimensions.get('window').width / 25,
        color: '#fff',
        fontWeight: '300',
        paddingBottom: "5%",
        textAlign: 'center',
        paddingHorizontal: "2%",
        color: '#A6279B',
    }
   
})
