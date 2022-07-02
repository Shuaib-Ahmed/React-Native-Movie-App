import { ScrollView } from "react-native";
import React from "react";

import { playing_now_url, upcoming_url, top_rated_url } from "../utils/Api";

import { GlobalStyle } from "../utils/GlobalStyle";

import { Navbar, Trending, MovieSection } from "../components";

const HomeScreen = () => {
  return (
    <ScrollView style={GlobalStyle.defaultContainer}>
      <Navbar />
      <Trending />
      <MovieSection title="Upcoming" url={upcoming_url} />
      <MovieSection title="Playing Now" url={playing_now_url} />
      <MovieSection title="Top Rated" url={top_rated_url} />
    </ScrollView>
  );
};

export default HomeScreen;
