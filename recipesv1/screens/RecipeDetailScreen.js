import { useEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { RECIPES } from "../data/recipes";

const RecipeDetailScreen = () => {
  const navigation = useNavigation();
  const { recipe } = useRoute().params;
  const { width, height } = useWindowDimensions();

  const openNext = () => {
    const i = RECIPES.findIndex((r) => r.id === recipe.id);
    const next = RECIPES[i + 1] % RECIPES.length;
    navigation.push("RecipeDetail", { recipe: next });
  };

  // const navigation = useNavigation()
  // useEffect(() => {
  //     navigation.setOptions({ title: recipe.name })
  // }, [recipe])

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: recipe.thumb }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.meta}>
          {recipe.category} * {recipe.area}
        </Text>
        <Text style={styles.section}>Ингредиенты</Text>
        <Text style={styles.text}>
          * Заглушка - настоящие ингредиенты придут с API в Модуле 5
        </Text>
      </View>
      <View style={{ position: "relative", top: width - 80 }}>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {navigation.navigate("RecipeCategoryList", {category: recipe.category})}}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              padding: 7,
              paddingHorizontal: 15,
              backgroundColor: "#367586e1",
              borderRadius: 50,
            }}
          >
            Еще рецептов с такой категории
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 240 },
  body: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#1e293b" },
  meta: { fontSize: 14, color: "#64748b", marginTop: 4 },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 6,
    color: "#1e293b",
  },
  text: { fontSize: 15, color: "#334155", lineHeight: 22 },
});

export default RecipeDetailScreen;
