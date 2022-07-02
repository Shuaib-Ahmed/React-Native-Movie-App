import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { image_url } from "../utils/Api";

import Iconicicon from "react-native-vector-icons/Ionicons";
import { GlobalStyle } from "../utils/GlobalStyle";

import { Link } from "@react-navigation/native";

const MoviePoster = ({ movieData }) => {
  const { poster_path, title, vote_average } = movieData;
  const imageUrl = `${image_url}${poster_path}`;

  return (
    <Link style={styles.imageContainer} to={{ screen: "movieDetail" }}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={[styles.title, GlobalStyle.textFont]}>
        {title.length > 10 ? `${title.substring(0, 13)}....` : title}
      </Text>

      <View style={styles.voteContainer}>
        <Iconicicon name="star" size={15} color="yellow" />
        <Text style={[styles.vote, GlobalStyle.textFont]}>
          {vote_average.toFixed(2)} / 10
        </Text>
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
