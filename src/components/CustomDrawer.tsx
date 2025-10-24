import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
export const FAVORITES = [
  { id: "11", title: "Nike Air Max", price: "$129" },
  { id: "22", title: "Apple Watch", price: "$399" },
  { id: "33", title: "Sony Headphones", price: "$199" },
];

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      className="bg-gray-100"
    >
      <Text className="text-xl font-bold text-gray-900 my-4">Favorites</Text>

      {/* Favorite Items Cards */}
      {FAVORITES.map((item) => (
        <Pressable
          key={item.id}
          className="bg-white rounded-xl p-4 mb-4 shadow"
          onPress={() => {
            router.push(`/product/${item.id}`);
            props.navigation.closeDrawer();
          }}
        >
          <Text className="text-lg font-semibold text-gray-800">
            {item.title}
          </Text>
          <Text className="text-gray-500">{item.price}</Text>
        </Pressable>
      ))}

      <View className="h-1 bg-gray-300 my-6 rounded" />

      {/* Optional Main Routes */}
      <Pressable
        className="p-3"
        onPress={() => {
          router.push("/(store)");
          props.navigation.closeDrawer();
        }}
      >
        <Text className="text-base font-medium">Go to Store</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}
