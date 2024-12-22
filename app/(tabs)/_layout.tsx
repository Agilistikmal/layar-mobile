import { Tabs } from "expo-router";
import React from "react";
import { Monicon } from "@monicon/native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Monicon name="majesticons:home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Monicon name="majesticons:user-box" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
