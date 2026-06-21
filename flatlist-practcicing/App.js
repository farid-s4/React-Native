import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NameList from "./components/NameList";
import ProfileCard from "./components/ProgileCard";
import profilePhoto from "./assets/profile.jpg";
import { FlatList } from "react-native";

export default function App() {
  const profileCards = [
    { id: 1, name: "cbcvbc", city: "Baku", photo: profilePhoto },
    { id: 2, name: "xdfs", city: "Moscow", photo: profilePhoto },
    { id: 3, name: "cvbb", city: "Berlin", photo: profilePhoto },
    { id: 4, name: "dsd", city: "Amsterdam", photo: profilePhoto },
    { id: 5, name: "sdf", city: "London", photo: profilePhoto },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.listHeaderStyle}>Header</Text>}
        ListEmptyComponent={<Text style={styles.listEmptyStyle}>Empty</Text>}
        data={profileCards}
        renderItem={({item})=>{
          console.log(item)
          return <ProfileCard name={item.name} city={item.city} profilePhoto={item.photo}/>
        }}
        keyExtractor={item=>String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listHeaderStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listEmptyStyle: {
    fontSize: 30,
    color: "#924a4ade",
    textAlign: "center",
  },
});
