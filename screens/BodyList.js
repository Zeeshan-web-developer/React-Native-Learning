import { StyleSheet, Text, View,FlatList } from 'react-native'
export default function Button() {
    const Data = [
        {
            id: 1,
            name: "Chest",
        },
        {
            id: 2,
            name: "Back",
        },
        {
            id: 3,
            name: "Legs",
        },
        {
            id: 4,
            name: "Shoulder",
        },
        {
            id: 5,
            name: "Biceps",
        },
        {

            id: 6,
            name: "Triceps",
        },
        {
            id: 7,
            name: "Abs",
        },
        {
            id: 8,
            name: "Shoulders",
        },
        {
            id: 9,
            name: "Forearms",
        },
    ]
    const RenderItems = ({ item }) => (
        <View style={styles.singleItem}>
            <Text style={styles.text}>{item}</Text>
            <Text style={styles.text2}>(900)-630-789</Text>
        </View>
    )
        
    
    return (
        <View style={styles.container}>
           <FlatList data={Data} renderItem={({item}) => <RenderItems item={item.name}/>} showsVerticalScrollIndicator={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fd127f',
       paddingHorizontal: "15%",
        paddingVertical: "5%",
       
    },
    singleItem: {
       
        backgroundColor: '#2dddff',
        borderRadius: 2,
        marginVertical: "2%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
    ,
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: "Roboto",
        marginVertical: "5%",
       
    },
    text2: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "Roboto",
        marginVertical: "5%",
    },
})
