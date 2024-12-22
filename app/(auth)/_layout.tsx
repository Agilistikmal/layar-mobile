import { Tabs } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="register" />
      <Tabs.Screen name="phone" />
    </Tabs>
  );
}
