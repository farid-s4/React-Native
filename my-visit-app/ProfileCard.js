import { StyleSheet, Text, View, Image } from 'react-native';
export function ProfileCard({name, city, bestpl, profilePhoto}){
    return (
        <View style={styles.container}>
            <Image source={profilePhoto} style={{width:200, height:200, borderRadius:100}}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Name: {name}</Text>
                <Text style={styles.text}>City: {city}</Text>
                <Text style={styles.text}>Best Programming Language: {bestpl}</Text>
            </View>
        </View>
    )
}           
const styles = StyleSheet.create({
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    textContainer:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    }
})
