import { authService } from "@/lib/service/auth_service";
import { router, Tabs } from "expo-router";
import React from "react";

export default async function AuthLayout() {
  const authToken = await authService.getLocalAuthToken();
  if (authToken) {
    router.replace("/(tabs)");
    return;
  }

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
