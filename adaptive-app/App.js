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
      badge: "Team Lead",
    },
    {
      id: "2",
      name: "Jane Smith",
      age: 28,
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "true",
      badge: "Senior Designer",
    },
    {
      id: "3",
      name: "Alex Johnson",
      age: 35,
      role: "DevOps Engineer",
      avatar: "https://i.pravatar.cc/150?img=11",
      status: "false",
      badge: "Infrastructure Specialist",
    },
    {
      id: "4",
      name: "Sarah Connor",
      age: 32,
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "true",
      badge: "Project Coordinator",
    },
    {
      id: "5",
      name: "Michael Brown",
      age: 42,
      role: "QA Automation",
      avatar: "https://i.pravatar.cc/150?img=12",
      status: "false",
      badge: "Testing Lead",
    },
    {
      id: "6",
      name: "Emily Davis",
      age: 29,
      role: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?img=15",
      status: "true",
      badge: "Analytics Expert",
    },
    {
      id: "7",
      name: "David Wilson",
      age: 38,
      role: "Backend Developer",
      avatar: "https://i.pravatar.cc/150?img=18",
      status: "true",
      badge: "API Specialist",
    },
    {
      id: "8",
      name: "Olivia Martinez",
      age: 31,
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=20",
      status: "false",
      badge: "UI Developer",
    },
  ];
  const { width, height } = useWindowDimensions();
  const [selectedUser, setSelectedUser] = useState(DATA);
  const [users, setUsers] = useState(DATA);
  const [refreshing, setRefreshing] = useState(false);

  function deleteSelectedUser() {
    const newData = DATA.filter((user) => user.id !== selectedUser);
    setUsers(newData);
  }           
  function onRefresh() {
    setRefreshing(true);
    setUsers([]); // Сделал чисто для вида обновления
    setTimeout(() => {
      setUsers(DATA);
      setRefreshing(false);
    }, 1000);
  }  

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
        data={users}
        key={height > width ? 1 : 2}
        keyExtractor={(item) => item.id}
        numColumns={height > width ? 1 : 2}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={({ item }) => {
          return (
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
                badge={item.badge}
              />
              {selectedUser === item.id && (
                <Pressable onPress={deleteSelectedUser}>
                  <Text style={styles.deleteButton}>Delete selected user</Text>
                </Pressable>
              )}
            </Pressable>
          );
          
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userList: {
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
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
  },
});
