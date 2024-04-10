import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{"\n"}</Text>
      <Button
        title="Go to Product"
        onPress={() => {
          // 1. Navigate to the Details route with params
          navigation.navigate("Product");
        }}
      />
    </View>
  );
};

export default HomeScreen;
