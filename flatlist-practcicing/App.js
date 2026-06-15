import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NameList from './components/NameList';
import ProfileCard from './components/ProgileCard';
import profilePhoto from './assets/profile.jpg';
import { FlatList } from 'react-native';

export default function App() {
  const profileCards = [
    <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,  
      <ProfileCard name="John"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,
      <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,
      <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,
      <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,
      <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,
      <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,
      <ProfileCard name="John Doe"
     city="New York"
      profilePhoto={require('./assets/profile.jpg')} />,

  ]
  return (
    <View >
      <FlatList
      ListHeaderComponent={<Text style={styles.listHeaderStyle}>Header</Text>}
      ListEmptyComponent={<Text style={styles.listEmptyStyle}>Empty</Text>}
      data={profileCards}
      renderItem={({item})=>console.log(item) || item}
      keyExtractor={(item, index) => String(index)}
      contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100,
  },
  listHeaderStyle:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listEmptyStyle:{
    fontSize: 30,
    color: '#924a4ade',
    textAlign: 'center',
  }
});
