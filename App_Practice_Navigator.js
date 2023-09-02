import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#008b8b",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}

        <Stack.Screen
          name="First"
          component={FirstPage}
          options={{ title: "FirstPage" }}
        />
        <Stack.Screen
          name="Second"
          component={SecondPage}
          options={{ title: "SecondPage" }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdPage}
          options={{ title: "ThirdPage" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
