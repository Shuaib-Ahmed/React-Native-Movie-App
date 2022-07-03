import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { image_url } from "../utils/Api";

import Iconicicon from "react-native-vector-icons/Ionicons";
import { GlobalStyle } from "../utils/GlobalStyle";

import { Link } from "@react-navigation/native";

const MoviePoster = ({ movieData }) => {
  const { poster_path, title, vote_average, id } = movieData;
  const imageUrl = `${image_url}${poster_path}`;

  return (
    <Link
      style={{ margin: 7 }}
      to={{ screen: "movieDetail", params: { id: id } }}
    >
      <View style={styles.imageContainer}>
        {poster_path && (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        )}

        {poster_path === null && (
          <Image
            style={styles.image}
            source={require("../assets/default_image.jpg")}
          />
        )}

        <Text style={[styles.title, GlobalStyle.textFont]}>
          {title.length > 10 ? `${title.substring(0, 13)}....` : title}
        </Text>

        <View style={styles.voteContainer}>
          <Iconicicon name="star" size={15} color="yellow" />
          <Text style={[styles.vote, GlobalStyle.textFont]}>
            {vote_average.toFixed(2)} / 10
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 240,
    margin: 7,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "stretch",
    borderRadius: 5,
  },
  title: {
    marginVertical: 5,
  },
  voteContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  vote: {
    marginLeft: 5,
  },
});

export default MoviePoster;
