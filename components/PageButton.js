import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { GlobalStyle } from "../utils/GlobalStyle";

const PageButton = ({ setPage, page, totalPages }) => {
  return (
    <View style={styles.container}>
      {page > 1 && (
        <TouchableOpacity
          style={styles.pageBtn}
          onPress={() => {
            setPage((prevState) => prevState - 1);
          }}
        >
          <FontAwesomeIcon name="less-than" size={15} color={"tomato"} />
        </TouchableOpacity>
      )}
      <Text style={[GlobalStyle.textFont, styles.text]}>page : {page}</Text>
      {page < totalPages && (
        <TouchableOpacity
          style={styles.pageBtn}
          onPress={() => {
            setPage((prevState) => prevState + 1);
          }}
        >
          <FontAwesomeIcon name="greater-than" size={15} color={"tomato"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
  pageBtn: {
    padding: 5,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});

export default PageButton;
