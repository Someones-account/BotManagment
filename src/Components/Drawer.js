import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigation";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Users from "./screens/Users";
import Schedule from "./screens/Schedule";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const DrawerContents = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          drawerIcon: ({}) => <Ionicons name="home-outline" size={22} />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Users Data"
        component={Users}
        options={{
          drawerIcon: ({}) => <Ionicons name="person-outline" size={22} />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Schedule Data"
        component={Schedule}
        options={{
          drawerIcon: ({}) => <Ionicons name="add" size={22} />,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const AppDrawer = () => {
  return <DrawerContents />;
};

export default AppDrawer;
