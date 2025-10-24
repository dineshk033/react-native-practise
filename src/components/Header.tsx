import React, { use, useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import CartModal from "./CartModal";
export default function StoreHeader() {
  const router = useRouter();
  const navigation = useNavigation();
  const [showCart, setShowCart] = useState(false);

  const cartItems = [
    {
      id: 1,
      title: "Nike Shoes",
      price: "$99",
      quantity: 1,
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Headphones",
      price: "$149",
      quantity: 2,
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <View className={`flex-row items-center gap-2 px-3 `}>
      <StatusBar style="dark" animated />

      {/* Search field */}
      <View className="flex-1 flex-row items-center  rounded-xl bg-slate-50 border border-slate-200 px-2">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          className="p-2 mr-3"
        >
          <Ionicons
            name="search-outline"
            size={18}
            color="#60a5fa"
            style={{ marginRight: 6 }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search product"
          placeholderTextColor="#9ca3af"
          className="flex-1 text-base text-gray-900 px-2 py-3"
          returnKeyType="search"
          onFocus={() => router.push("/search-product")}
        />
      </View>

      {/* Favorite */}
      <Pressable
        onPress={() => router.push("/favorites")}
        hitSlop={10}
        className="p-1.5 relative"
      >
        <Ionicons name="heart-outline" size={22} color="#111827" />
      </Pressable>

      {/* Notification with badge */}
      <Pressable
        onPress={() => setShowCart(true)}
        hitSlop={10}
        className="p-1.5 relative"
      >
        <Ionicons name="notifications-outline" size={22} color="#111827" />
        <View className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
      </Pressable>
      {/* Modal */}
      <CartModal
        visible={showCart}
        onClose={() => setShowCart(false)}
        items={cartItems}
      />
    </View>
  );
}
