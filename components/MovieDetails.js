import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import MovieCast from "./MovieCast";
import { GlobalStyle } from "../utils/GlobalStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const MovieDetails = ({ data, id }) => {
  const { original_title, title, overview, genres } = data;

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.sectionHeader, { margin: 0 }]}>
        {title || original_title}
      </Text>
      <Text style={[styles.plotText, GlobalStyle.textFont]}>
        <Text style={styles.contentHeading}>PLOT : </Text> {overview}
      </Text>
      <ExtraDetails data={data} />

      <FlatList
        data={genres}
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={({ item }) => (
          <Text style={[GlobalStyle.textFont, styles.genre]}>{item.name}</Text>
        )}
        style={styles.genreContainer}
      />

      <MovieCast id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  contentHeading: {
    fontWeight: "bold",
  },
  plotText: {
    fontSize: 15,
    marginVertical: 20,
    lineHeight: 20,
  },
  extraDataContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  extraData: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  genreContainer: {
    marginVertical: 20,
  },
  genre: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    borderColor: "tomato",
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 10,
  },
});

export const ExtraDetails = ({ data }) => {
  const { vote_average, runtime, budget } = data;
  const extraData = [
    {
      iconName: "star",
      text: `${vote_average.toFixed(2)} / 10`,
      color: "yellow",
    },
    { iconName: "time", text: `${runtime} Min`, color: "tomato" },
    { name: "Budget", text: `${budget} $` },
  ];

  return (
    <View style={styles.extraDataContainer}>
      {extraData.map(({ iconName, name, text, color }, index) => {
        return (
          <View key={index} style={styles.extraData}>
            {iconName && (
              <Ionicons
                name={iconName}
                size={15}
                color={color}
                style={{ marginRight: 5 }}
              />
            )}
            {name && (
              <Text style={{ fontSize: 15, marginRight: 5 }}>{name}</Text>
            )}
            <Text style={{ fontSize: 15 }}>{text}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MovieDetails;
