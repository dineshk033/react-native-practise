// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="(store)/index"
      screenOptions={{ headerShown: false }}
    />
  );
}
