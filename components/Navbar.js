import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { GlobalStyle } from "../utils/GlobalStyle";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Navbar = () => {
  return (
    <View style={style.navContainer}>
      <Text style={[style.logo, GlobalStyle.textFont]}>
        Movie
        <MaterialCommunityIcons name="movie-open-off" color="black" size={20} />
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  navContainer: {
    margin: 10,
    alignItems: "center"
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Navbar;
