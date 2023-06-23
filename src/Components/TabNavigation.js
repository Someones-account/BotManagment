import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Users from "./screens/Users";
import Schedule from "./screens/Schedule";
import AuthentifictionPage from "./AuthentificationPage";

const Tab = createMaterialBottomTabNavigator();

const screenHandler = ({ route }) => ({
  tabBarIcon: (focused, color) => {
    let iconName;
    let rn = route.name;

    if (rn === "Authentification") {
      iconName = focused ? "home" : "home-outline";
    } else if (rn === "Schedule") {
      iconName = focused ? "list" : "list-outline";
    } else if (rn === "Users") {
      iconName = focused ? "settings" : "settings-outline";
    }

    return <Ionicons name={iconName} size={20} color={color}></Ionicons>;
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Authentification"
      screenOptions={screenHandler}
    >
      <Tab.Screen
        name={"Authentification"}
        component={AuthentifictionPage}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        options={{ headerShown: false }}
        name={"Users"}
        component={Users}
      ></Tab.Screen>
      <Tab.Screen
        name={"Schedule"}
        options={{ headerShown: false }}
        component={Schedule}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
