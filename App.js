import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text,StyleSheet,SafeAreaView,Dimensions ,StatusBar, Animated,FlatList,Image, TouchableOpacity} from 'react-native'
import Header from './screens/Header'
import Form from './screens/Form'
import List from './screens/BodyList'
import Users from './screens/Users'
const App = () => {
  return (
    <View style={styles.app}>
<StatusBar backgroundColor="#fff" barStyle="light-content" />
      <Users />
       {/* <Header />
      <Form /> */}
  </View>
  )
}

export default App
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#Fff',
    
  }
 
})
