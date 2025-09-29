import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ErrorBoundary from "../components/ErrorBoundary";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#0EA5E9',
  },
  headerTitleStyle: {
    fontWeight: 'bold' as const,
  },
});
function RootLayoutNav() {
  return (
    <Stack screenOptions={{
      headerBackTitle: "Back",
      headerStyle: styles.headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: styles.headerTitleStyle,
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="assessment-step1" options={{ title: "Assessment - Step 1" }} />
      <Stack.Screen name="assessment-step2" options={{ title: "Assessment - Step 2" }} />
      <Stack.Screen name="assessment-results" options={{ title: "Assessment Results" }} />
      <Stack.Screen name="reports" options={{ title: "My Reports" }} />
      <Stack.Screen name="knowledge-hub" options={{ title: "Knowledge Hub" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
    </Stack>
  );
}
export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={styles.container}>
          <RootLayoutNav />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}