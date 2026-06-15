import { StyleSheet, Text, View, FlatList } from 'react-native';
export default function NameList() {
  const users = ["John", "Jane", "Doe", "Smith"];
  return (
    <View >
      <FlatList
        contentContainerStyle={styles.container}
        data={users}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        keyExtractor={(item, index) => String(index)}
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
    marginTop: 50,
  },
  text:{
    fontSize: 40,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#e0e0e0',
  }
});