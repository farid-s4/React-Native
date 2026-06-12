import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
export default function Like() {
    const [likeCounter, setLikeCount] = useState(0);
    console.log(likeCounter)
    return (
        <View>
            <Button title={`❤️ Like ${likeCounter} ❤️`}
            onPress={()=>setLikeCount(likeCounter + 1)}/>    
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: '#000000',
    }
})