import React from "react";
import { View, TextInput, Pressable, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function StoreHeader() {
  const router = useRouter();

  return (
    <View className={`flex-row items-center gap-2 px-3 `}>
      <StatusBar style="dark" animated />

      {/* Search field */}
      <View className="flex-1 flex-row items-center  rounded-xl bg-slate-50 border border-slate-200 px-2">
        <Ionicons
          name="search-outline"
          size={18}
          color="#60a5fa"
          style={{ marginRight: 6 }}
        />
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
        onPress={() => router.push("/notifications")}
        hitSlop={10}
        className="p-1.5 relative"
      >
        <Ionicons name="notifications-outline" size={22} color="#111827" />
        <View className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
      </Pressable>
    </View>
  );
}
