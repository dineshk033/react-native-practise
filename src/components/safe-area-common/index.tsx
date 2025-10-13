import { StyleSheet, Platform, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default function CustomSafeArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}
