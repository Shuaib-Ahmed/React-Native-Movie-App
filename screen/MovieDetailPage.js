import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

import { Navbar, MovieDetails } from "../components";
import { GlobalStyle } from "../utils/GlobalStyle";
import useFetchData from "../hooks/useFetchData";
import { getMovieDetails, image_url } from "../utils/Api";

import Loading from "../components/Loading";

const screenWidth = Dimensions.get("window").width;

const MovieDetailPage = ({ route }) => {
  const { id } = route.params;
  const [data, loading] = useFetchData(getMovieDetails(id));

  if (loading) {
    return <Loading size={"large"} />;
  }

  const { backdrop_path } = data;

  return (
    <ScrollView
      style={[GlobalStyle.defaultContainer, { backgroundColor: "white" }]}
    >
      <Navbar />

      {backdrop_path && (
        <Image
          source={{ uri: `${image_url}/${backdrop_path}` }}
          style={styles.posterImage}
        />
      )}

      {backdrop_path === null && (
        <Image
          style={styles.posterImage}
          source={require("../assets/default_image.jpg")}
        />
      )}
      <MovieDetails data={data} id={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: screenWidth,
    height: 250,
    resizeMode: "stretch",
  },
});

export default MovieDetailPage;
