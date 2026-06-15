import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import ProfileCard from "./components/ProfileCard";
import { useState, useEffect } from "react";

export default function App() {
  const DATA = [
    {
      id: "1",
      name: "John Doe",
      age: 30,
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "true",
    },
    {
      id: "2",
      name: "Jane Smith",
      age: 28,
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "true",
    },
    {
      id: "3",
      name: "Alex Johnson",
      age: 35,
      role: "DevOps Engineer",
      avatar: "https://i.pravatar.cc/150?img=11",
      status: "false",
    },
    {
      id: "4",
      name: "Sarah Connor",
      age: 32,
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "true",
    },
    {
      id: "5",
      name: "Michael Brown",
      age: 42,
      role: "QA Automation",
      avatar: "https://i.pravatar.cc/150?img=12",
      status: "false",
    },
  ];
  const { width, height } = useWindowDimensions();
  const [selectedUser, setSelectedUser] = useState(DATA);
  console.log(DATA);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}> Our team.</Text>
            <Text style={styles.listHeader}>
              Window size: {Math.floor(height)}x{Math.floor(width)}
            </Text>
            <Text style={styles.listHeader}>
              {height > width ? "Portrait" : "Landscape"}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.listEmpty}>Our team are empty.</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        contentContainerStyle={styles.userList}
        data={DATA}
        key={height>width ? 1 : 2}
        keyExtractor={(item) => item.id}
        numColumns={height>width ? 1 : 2}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelectedUser(item.id)}>
            <ProfileCard
              name={item.name}
              age={item.age}
              role={item.role}
              avatar={item.avatar}
              status={item.status}
              cardBackgroundColor={
                selectedUser === item.id ? "#0077ff27" : "#FFFFFF"
              }
            />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userList: {
    margin: 15,
    flexGrow: 1,
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  listHeader: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  listHeaderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  listEmpty: {
    fontSize: 18,
    color: "red",
  },
  itemSeparator: {
    height: 3,
    backgroundColor: "#0070bbd7",
    borderRadius: 50,
    paddingVertical: 2,
    marginVertical: 5,
  },
});
