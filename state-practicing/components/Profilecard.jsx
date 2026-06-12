import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
export default function ProfileCard({name, city, profilePhoto}){
    const [select, setSelect] = useState(false);
    return (
        <View style={[{backgroundColor: select ? '#00ff0063' : '#FFFFFF'}, styles.container]}>
            <Image source={profilePhoto} style={{width:50, height:50, borderRadius:100}}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Name: {name}</Text>
                <Text style={styles.text}>City: {city}</Text>
                <Pressable onPress={()=>setSelect(!select)} style={styles.selectButtonStyle}><Text>
                    {select ? "✅" : "❌"} Выбрать</Text></Pressable>
            </View>
        </View>
    )
}           
const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:20,
    },
    selectButtonStyle:{
        marginTop:10,
        padding:10,
        borderRadius:5,
        alignItems:'center',
        backgroundColor:'#6d6d6d44',
    },
    container:{
        width:300,
        height:200,
        borderColor:'#000000',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginBottom:20,
    },
    textContainer:{
        marginTop:20,
    }
})
