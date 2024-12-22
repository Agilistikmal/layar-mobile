import { Theme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import "../global.css";
import { Colors } from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Jakarta: require("../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
  });

  const theme: Theme = {
    dark: false,
    colors: {
      primary: Colors.brand,
      background: Colors.black,
      card: Colors.black,
      text: Colors.white,
      border: Colors.brand,
      notification: Colors.brand,
    },
    fonts: {
      regular: {
        fontFamily: "Jakarta",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "Jakarta",
        fontWeight: "bold",
      },
      medium: {
        fontFamily: "Jakarta",
        fontWeight: "700",
      },
      heavy: {
        fontFamily: "Jakarta",
        fontWeight: "300",
      },
    },
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
