import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawer";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function StoreLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        // headerTitle: "",
        // drawerType: "slide",
        // headerStyle: { backgroundColor: "#fff" },
        // overlayColor: "rgba(0,0,0,0.4)",
        // headerLeft: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Store" }} />
      <Drawer.Screen
        name="product/[id]"
        options={({ navigation }) => ({
          title: "Product",
          // Disable drawer gestures here for clean UX
          swipeEnabled: false,
          headerLeft: () => (
            <Pressable className="ml-3" onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={26} color="#333" />
            </Pressable>
          ),
        })}
      />
    </Drawer>
  );
}
