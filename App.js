import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./views/Home";
import { SearchScreen } from "./views/Search";
import { FavoritesScreen } from "./views/Favorites";
import { DetailViewScreen } from "./views/DetailView";
import { AboutScreen } from "./views/About";
import GlobalState from "./state/GlobalState";
import Toast from "react-native-toast-message";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome",
          statusBar: {
            hidden: true,
          },
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search for rentals" }}
      ></Stack.Screen>
      <Stack.Screen
        name="SavedUnits"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      ></Stack.Screen>
      <Stack.Screen
        name="DetailView"
        component={DetailViewScreen}
        options={{ title: "Detail View" }}
      ></Stack.Screen>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About iRent" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <GlobalState>
        <MainStack />
      </GlobalState>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
