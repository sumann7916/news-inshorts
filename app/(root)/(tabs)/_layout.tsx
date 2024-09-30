import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Category from "./category";
import Feed from "./feed";

const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Category}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? "#DC2F02" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#DC2F02" : "black"}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Welcome"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? "#DC2F02" : "black"}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Layout;
