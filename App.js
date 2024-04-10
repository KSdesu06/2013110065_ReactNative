import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen'
// import ProductScreen from "./components/ProductScreen";

import CustomSideBarMenu from "./pages/CustomSideBarMenu";
// import DetailProduct from "./screens/DetailProduct";
import DetailWeater from "./screens/DetailWeather";
import WeatherScreen from "./screens/WeatherScreen";

// function HomeScreenStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: "Home" }}
//       />
      
//     </Stack.Navigator>
//   );
// }

function WeatherScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Weather"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{ title: "Weather" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailWeater}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f0f8ff",
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomSideBarMenu {...props} />}
    >
      {/* <Drawer.Screen
        name="HomeDrawer"
        component={HomeScreenStack}
        options={{ drawerLabel: "Home" }}
      /> */}
      <Drawer.Screen
        name="Weather"
        component={WeatherScreenStack}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
