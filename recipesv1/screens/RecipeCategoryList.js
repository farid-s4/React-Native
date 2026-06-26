import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  FlatList,
} from "react-native";
import PressableCard from "../components/PressableCard";
import RecipeCard from "../components/RecipeCard";
import { useRoute } from "@react-navigation/native";
import { RECIPES } from "../data/recipes";
import { useNavigation } from "@react-navigation/native";
const RecipeCategoryList = () => {
    const navigation = useNavigation();
  const { category } = useRoute().params;
  const { width, height } = useWindowDimensions()
  const numColumns = width > height ? 3 : 2
  const filtered = RECIPES.filter((item) => item.category.toLowerCase().includes(category.toLowerCase()))
  return (
    <FlatList
                data={filtered}
                key={numColumns}
                numColumns={numColumns}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 6 }}
                renderItem={({ item }) =>
                    <PressableCard
                        onPress={() => { navigation.navigate('RecipeDetail', { recipe: item }) }}
                        style={{ flex: 1 / numColumns, padding: 6 }}
                    >
                        <RecipeCard recipe={item} />
                    </PressableCard>
                }
                ListEmptyComponent={<Text style={styles.empty}>Ничего не найдено</Text>}
            />
  );
};

const styles = StyleSheet.create({
    screen: { flex: 1, paddingTop: 20, paddingHorizontal: 8, backgroundColor: '#F4F7FA' },
    empty: { textAlign: 'center', color: '#6478b', marginTop: 40 }
})

export default RecipeCategoryList;
