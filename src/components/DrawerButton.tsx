// components/DrawerToggleButton.tsx
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

export default function DrawerToggleButton() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Pressable className="ml-3" onPress={() => navigation.toggleDrawer()}>
      <Ionicons name="menu-outline" size={24} color="#60a5fa" />
    </Pressable>
  );
}
