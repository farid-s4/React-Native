import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProfileCard } from './ProfileCard';
import profilePhoto from './assets/profile.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard name='Farid'
       city='Baku' bestpl='C#' 
       profilePhoto={profilePhoto}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#282828',
    }
  })