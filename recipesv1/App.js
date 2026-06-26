import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeListScreen from "./screens/RecipeListScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import RecipeCategoryList from "./screens/RecipeCategoryList";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text, View } from "react-native";
import { RECIPES } from "./data/recipes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RecipeList"
        screenOptions={{
          headerStyle: { backgroundColor: "#2023A" },
          headerTintColor: "#61DAFB",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={({ navigation }) => ({
            title: "Что приготовить",
            headerRight: () => {
              const r = RECIPES[Math.floor(Math.random() * RECIPES.length)];

              return (
                <View>
                  <Pressable
                    onPress={() =>
                      navigation.push("RecipeDetail", { recipe: r })
                    }
                  >
                    <Text style={{ fontSize: 14, color: "white" }}>
                      🎲 Случайный рецепт 🎲
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("About")
                    }
                  >
                    <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>ⓘ О приложении
                    </Text>
                  </Pressable>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={({ route }) => ({
            title: route.params.recipe.name,
          })}
        />
        <Stack.Screen
          name="RecipeCategoryList"
          component={RecipeCategoryList}
          options={({ route }) => ({
            title: route.params.category,
          })}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={() => ({
            title: "О приложении что приготовить"
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
