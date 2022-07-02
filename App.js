import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Ionicons from "react-native-vector-icons/Ionicons";
import Fontistoicons from "react-native-vector-icons/Fontisto";

import { HomeScreen, GenreScreen, SearchScreen } from "./screen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./assets/font/Roboto-Regular.ttf"),
    RobotoItalic: require("./assets/font/Roboto-Italic.ttf"),
  });

  const MovieDetail = () => {
    return <Text>Hello There</Text>;
  };

  if (!loaded) {
    return <Text>Loading....</Text>;
  }

  const TabScreens = () => {
    return (
      <Tab.Navigator
        initialRouteName="Search"
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
        <Stack.Screen name="movieDetail" component={MovieDetail} />
        <Stack.Screen name="TabScreen" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
