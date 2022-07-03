import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = ({ size }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={size} color="black" />
    </View>
  );
};

export default Loading;
