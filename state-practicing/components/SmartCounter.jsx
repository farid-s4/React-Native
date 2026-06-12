import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function SmartCounter() {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Text style={styles.text}>{counter}</Text>
            <Pressable onPress={()=>setCounter(counter + 1)} style={styles.buttonStyle}>
                <Text style={styles.text}>+</Text>
            </Pressable>
            <Pressable  style={styles.buttonStyle}  onPress={()=>{if (counter > 0) return setCounter(counter - 1)}}>
                <Text style={styles.text}>-</Text>
            </Pressable>
            <Pressable  style={styles.buttonStyle}  onPress={()=>{setCounter(0)}}>
                <Text style={styles.text}>Reset</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: '#000000',
    },
    buttonStyle:{
        marginTop:10,
        padding:10,
        borderRadius:5,
        alignItems:'center',
        backgroundColor:'#6d6d6d44',
    }
})