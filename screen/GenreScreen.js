import { ScrollView } from "react-native";
import React, { useState } from "react";

import { Navbar, GenreOptions, MovieSection, PageButton } from "../components";

import { GlobalStyle } from "../utils/GlobalStyle";
import { getDiscoverUrl } from "../utils/Api";

const GenreScreen = () => {
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <ScrollView style={GlobalStyle.defaultContainer}>
      <Navbar />
      <GenreOptions setGenre={setGenre} />
      <PageButton setPage={setPage} page={page} totalPages={totalPages} />
      <MovieSection
        url={getDiscoverUrl(page, genre)}
        setTotalPages={setTotalPages}
      />
    </ScrollView>
  );
};

export default GenreScreen;
