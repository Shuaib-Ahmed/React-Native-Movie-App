import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

import Iconicon from "react-native-vector-icons/Ionicons";
import { GlobalStyle } from "../utils/GlobalStyle";

const SearchBar = ({ query, setQuery }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Movie Name ...."
        value={query}
        onChangeText={setQuery}
        style={[styles.input, GlobalStyle.textFont]}
      />
      <Iconicon name="search" size={15} style={styles.inputIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 6,
    padding: 7,
    fontSize: 15,
  },
  inputIcon: {
    flex: 1,
    textAlign: "center",
    borderColor: "grey",
    borderLeftWidth: 2
  }
});

export default SearchBar;
