import { StyleSheet, StatusBar } from "react-native";

export const GlobalStyle = StyleSheet.create({
  defaultContainer: {
    marginTop: StatusBar.currentHeight,
  },
  textFont: {
    fontFamily: "Roboto",
  },
  sectionHeader: {
    fontFamily: "RobotoItalic",
    color: "tomato",
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 10,
    textDecorationLine: "underline"
  },
});
