// app/_layout.tsx
import "@/global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  const isValid = false; // replace with auth state

  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName="(store)/index"
        screenOptions={{ headerShown: false }}
      >
        {/* Public: store + search */}
        <Stack.Screen name="(store)/index" />
        <Stack.Screen name="search-product/index" />

        {/* Private: cart only when authenticated */}
        <Stack.Protected guard={!!isValid}>
          <Stack.Screen name="cart" />
        </Stack.Protected>

        {/* Auth screens visible only when not authenticated */}
        <Stack.Protected guard={!isValid}>
          <Stack.Screen name="(auth)/login" />
          <Stack.Screen name="(auth)/register" />
        </Stack.Protected>
      </Stack>
    </SafeAreaProvider>
  );
}
