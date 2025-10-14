import React, { useEffect, useMemo, useState, useCallback } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useRouter, Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomSafeArea from "@/components/safe-area-common";

const STORAGE_KEY = "recent_searches_v1";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      setRecent(raw ? JSON.parse(raw) : []);
    })();
  }, []);

  const saveRecent = useCallback(async (list: string[]) => {
    setRecent(list);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, []);

  const onSubmit = useCallback(
    async (term: string) => {
      const t = term.trim();
      if (!t) return;
      const next = [
        t,
        ...recent.filter((r) => r.toLowerCase() !== t.toLowerCase()),
      ].slice(0, 10);
      await saveRecent(next);
      router.back();
    },
    [recent, saveRecent, router]
  );

  const removeOne = useCallback(
    async (term: string) => {
      await saveRecent(recent.filter((r) => r !== term));
    },
    [recent, saveRecent]
  );

  const clearAll = useCallback(async () => {
    await saveRecent([]);
  }, [saveRecent]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recent;
    return recent.filter((r) => r.toLowerCase().includes(q));
  }, [query, recent]);

  return (
    <CustomSafeArea>
      {/* <Stack.Screen options={{ headerShown: true }} /> */}

      {/* Top bar */}
      <View className="flex-row items-center px-3 pt-2 pb-1">
        <Pressable
          onPress={() => router.back()}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Back"
          className="p-1.5 mr-2"
        >
          <Ionicons name="chevron-back" size={24} color="#1f1f1f" />
        </Pressable>

        <View className="flex-row items-center flex-1 h-10 rounded-xl bg-gray-50 border border-gray-200 px-2.5">
          <Ionicons
            name="search-outline"
            size={18}
            color="#6b7280"
            className="mr-1.5"
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            autoFocus
            returnKeyType="search"
            onSubmitEditing={() => onSubmit(query)}
            className="flex-1 text-base text-gray-900 p-0"
          />
        </View>
      </View>

      {/* Recent section */}
      <View className="px-4 pt-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-semibold text-gray-900">
            Recent Searches
          </Text>
          {recent.length > 0 && (
            <Pressable onPress={clearAll} hitSlop={8}>
              <Ionicons name="close" size={18} color="#111827" />
            </Pressable>
          )}
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <View className="h-3" />}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        renderItem={({ item }) => (
          <View className="flex-row items-center">
            <Pressable onPress={() => onSubmit(item)} className="flex-1 py-1.5">
              <Text className="text-base text-gray-900">{item}</Text>
            </Pressable>
            <Pressable
              onPress={() => removeOne(item)}
              hitSlop={8}
              className="p-1.5"
            >
              <Ionicons name="close" size={18} color="#6b7280" />
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text className="text-gray-500 px-4 pt-1.5">
            Start typing to search
          </Text>
        }
      />
    </CustomSafeArea>
  );
}
