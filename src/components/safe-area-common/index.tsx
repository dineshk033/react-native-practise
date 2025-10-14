import { StyleSheet, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
});
export default function CustomSafeArea({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: SafeAreaProvider is provided at the app layout level. Apply
  // Android status bar padding and flex:1 to ensure children can use
  // the full height and centering works as expected.
  return <SafeAreaView className="flex-1">{children}</SafeAreaView>;
}
