import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import useFetchData from "../hooks/useFetchData";
import { GlobalStyle } from "../utils/GlobalStyle";
import { getMovieCrew, image_url } from "../utils/Api";

const MovieCast = ({ id }) => {
  const [data, loading] = useFetchData(getMovieCrew(id));

  if (loading) {
    return <Text>Loading ......</Text>;
  }
  
  return (
    <View>
      <Text style={[GlobalStyle.sectionHeader]}>Cast</Text>
      <FlatList
        data={data.cast}
        renderItem={({ item }) => {
          const { original_name, profile_path } = item;
          return (
            <View style={{ marginHorizontal: 10 }}>
              <Image
                source={{ uri: `${image_url}/${profile_path}` }}
                style={styles.image}
              />
              <Text
                style={[
                  GlobalStyle.textFont,
                  { maxWidth: 100, textAlign: "center" },
                ]}
              >
                {original_name}
              </Text>
            </View>
          );
        }}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
    borderRadius: 50,
  },
});

export default MovieCast;
