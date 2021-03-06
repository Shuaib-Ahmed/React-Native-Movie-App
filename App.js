import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Ionicons from "react-native-vector-icons/Ionicons";
import Fontistoicons from "react-native-vector-icons/Fontisto";

import Loading from "./components/Loading"

import {
  HomeScreen,
  GenreScreen,
  SearchScreen,
  MovieDetailPage,
} from "./screen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./assets/font/Roboto-Regular.ttf"),
    RobotoItalic: require("./assets/font/Roboto-Italic.ttf"),
  });

  if (!loaded) {
    return <Loading size="large" />
  }

  const TabScreens = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{
          backgroundColor: "#fff",
          marginBottom: 50,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Genre") {
              iconName = "disqus";
              return <Fontistoicons name="disqus" size={size} color={color} />;
            } else {
              iconName = "search";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: "Roboto",
            marginBottom: 5,
          },
          tabBarStyle: { position: "absolute", paddingTop: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Genre" component={GenreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="movieDetail" component={MovieDetailPage} />
        <Stack.Screen name="TabScreen" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
