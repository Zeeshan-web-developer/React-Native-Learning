import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text,StyleSheet,SafeAreaView,Dimensions ,StatusBar, Animated,FlatList,Image, TouchableOpacity} from 'react-native'
import Header from './components/UserHeader'
import Form from './screens/Form'
import List from './screens/BodyList'
import Users from './screens/Users'
import Cart from './screens/Cart';
import Card from './screens/Card';
const App = () => {
  return (
    <View style={styles.app}>
<StatusBar backgroundColor="#3A3239" barStyle="light-content" />
     
      <Header />
      <Card/>
  </View>
  )
}

export default App
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#3A3239',
    width: "100%",
    alignItems: 'center',
    paddingTop: hp('3%'),
  }
 
})
