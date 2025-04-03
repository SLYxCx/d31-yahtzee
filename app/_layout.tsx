import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SawarabiMincho: require("../fonts/SawarabiMincho-Regular.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) SplashScreen.preventAutoHideAsync();
    else SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Don't render until fonts are loaded
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
      <Stack.Screen name="(play)" />
      <Stack.Screen name="options" />
    </Stack>
  );
}