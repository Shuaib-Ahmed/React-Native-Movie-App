import { ScrollView, Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";

import { Navbar, MovieSection, SearchBar, PageButton } from "../components";

import { GlobalStyle } from "../utils/GlobalStyle";
import { getSearchUrl } from "../utils/Api";

import Iconicon from "react-native-vector-icons/Ionicons";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <ScrollView style={GlobalStyle.defaultContainer}>
      <Navbar />
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />

      {searchQuery.trim() !== "" && (
        <PageButton setPage={setPage} page={page} totalPages={totalPages} />
      )}

      {searchQuery.trim() !== "" && (
        <MovieSection
          url={getSearchUrl(page, searchQuery)}
          setTotalPages={setTotalPages}
        />
      )}

      {searchQuery.trim() === "" && (
        <View style={styles.defaultResultContainer}>
          <Text style={[GlobalStyle.textFont, styles.defaultResultText]}>
            Search Movies
          </Text>
          <Iconicon name="search" size={25} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  defaultResultContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  defaultResultText: {
    fontSize: 25,
    marginRight: 5,
  },
});

export default SearchScreen;
