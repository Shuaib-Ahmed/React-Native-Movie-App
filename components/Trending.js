import { View, Text, FlatList } from "react-native";
import React from "react";

import { GlobalStyle } from "../utils/GlobalStyle";
import { trending_url } from "../utils/Api";

import MoviePoster from "./MoviePoster";
import Loading from "./Loading"

import useFetchData from "../hooks/useFetchData";

const Trending = () => {
  const [data, loading] = useFetchData(trending_url);

  if (loading) {
    return <Loading size="small"/>
  }

  return (
    <View>
      <Text style={GlobalStyle.sectionHeader}>Trending</Text>

      <FlatList
        data={data.results}
        renderItem={({ item }) => <MoviePoster movieData={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Trending;
