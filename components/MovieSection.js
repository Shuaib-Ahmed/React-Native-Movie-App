import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";

import { GlobalStyle } from "../utils/GlobalStyle";

import useFetchData from "../hooks/useFetchData";
import MoviePoster from "./MoviePoster";

const MovieSection = ({ title, url, setTotalPages }) => {
  const [data, loading] = useFetchData(url);

  if (loading) {
    <Text>Loading....</Text>;
  }

  useEffect(() => {
    if (data.total_pages && setTotalPages) {
      setTotalPages(data.total_pages);
    }
  }, [data.total_pages]);

  return (
    <View>
      {title && (
        <View style={styles.headerContainer}>
          <Text style={GlobalStyle.sectionHeader}>{title}</Text>
        </View>
      )}

      <View style={styles.movieContainer}>
        {data.results &&
          data.results.map((movieData, index) => (
            <MoviePoster movieData={movieData} key={index} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  movieContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default MovieSection;
