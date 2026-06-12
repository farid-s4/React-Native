import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import  Like from './components/Like';
import MyTextView from './components/MyTextView';
import ProfileCard from './components/Profilecard';
import profilePhoto from './assets/profile.jpg';
import SmartCounter from './components/SmartCounter';
export default function App() {
  return (
    <View style={styles.container}>
      <Like/>
      <MyTextView/>
      { <ScrollView contentContainerStyle={styles.scrollView}>
        <ProfileCard name='esdcv'
       city='Baku'  
       profilePhoto={profilePhoto}/>
       <ProfileCard name='dfgdfg'
       city='Baku' 
       profilePhoto={profilePhoto}/>
       <ProfileCard name='cvbcbc'
       city='Baku' 
       profilePhoto={profilePhoto}/>
       <ProfileCard name='asdff'
       city='Baku' 
       profilePhoto={profilePhoto}/>
      </ScrollView> } 
      <SmartCounter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
