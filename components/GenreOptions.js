import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import { genre_url } from "../utils/Api";
import useFetchData from "../hooks/useFetchData";
import { GlobalStyle } from "../utils/GlobalStyle";

const GenreOptions = ({ setGenre }) => {
  const [data, loading] = useFetchData(genre_url);

  if (loading) {
    return <Text>Loading....</Text>;
  }

  return (
    <View>
      <FlatList
        data={data.genres}
        renderItem={({ item }) => (
          <GenreButton genre={item} setGenre={setGenre} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.genreContainer}
      />
    </View>
  );
};

export const GenreButton = ({ genre, setGenre }) => {
  const [select, setSelect] = useState(false);

  const manageGenre = () => {
    setGenre((prevState) => {
      const genreArray = prevState.split(",");
      const index = genreArray.findIndex((id) => {
        return id === String(genre.id);
      });

      if (index === -1) {
        setSelect(true);
        return prevState.length === 0
          ? `${genre.id}`
          : `${prevState},${genre.id}`;
      } else {
        if (genreArray.length === 0) {
          setSelect(false);
          return "";
        } else {
          setSelect(false);
          genreArray.splice(index, 1);
          return genreArray.join(",");
        }
      }
    });
  };
  return (
    <TouchableOpacity
      style={[styles.genreButton, select ? styles.genreButtonActive : ""]}
      onPress={manageGenre}
    >
      <Text
        style={[
          GlobalStyle.textFont,
          styles.genreButtonText,
          select ? styles.genreButtonTextActive : "",
        ]}
      >
        {genre.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genreContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  genreButton: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 15,
  },
  genreButtonActive: {
    backgroundColor: "tomato",
    borderColor: "white",
  },
  genreButtonText: {
    fontSize: 15,
    color: "tomato",
  },
  genreButtonTextActive: {
    color: "white",
  },
});

export default GenreOptions;
