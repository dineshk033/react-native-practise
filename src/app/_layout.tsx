// app/_layout.tsx
import "@/global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  const isValid = false; // replace with auth state

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack
          initialRouteName="(store)"
          screenOptions={{ headerShown: false }}
        >
          {/* Public: store + search */}
          <Stack.Screen name="(store)" />
          {/* Private: cart only when authenticated */}
          <Stack.Screen name="search-product/index" />
          <Stack.Screen name="/cart" />

          {/* Auth screens visible only when not authenticated */}
          <Stack.Protected guard={!isValid}>
            <Stack.Screen name="(auth)/login" />
            <Stack.Screen name="(auth)/register" />
          </Stack.Protected>
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
