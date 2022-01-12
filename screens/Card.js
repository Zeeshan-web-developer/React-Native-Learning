import React, { useEffect } from "react"
import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native"
import axios from "axios"
import Icon from "react-native-vector-icons/Ionicons"
const Card = () => {
  const [data, setData] = React.useState([])
  useEffect(() => {
    axios
      .get("https://api.pexels.com/v1/curated?page=2&per_page=200", {
        headers: {
          Authorization:
            "563492ad6f91700001000001ca48897dc20c49869f371aed48074ec9",
        },
      })
      .then(res => {
        setData(res.data.photos)
      })
  }, [])
  return (
    <View style={styles.container}>
      {
        !data.length ? (
          <View style={styles.loading}>
                      <ActivityIndicator size="large" color="#0000ff" style={{flex:1,alignItems:"center"}}/>
          </View>
        ) : (
        <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.src.medium }}/>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <Icon name="ios-cloud-download" color="#581845" size={32} />
              <Icon name="heart-sharp" color="#581845" size={32} />
              <Icon name="share-social-sharp" color="#581845" size={32} />
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
        )
      }
      
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  imageContainer: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 150,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width / 2,
  },
  image: {
    width: Dimensions.get("window").width / 2.2,
    height: Dimensions.get("window").width / 2,
    borderRadius: 10,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
