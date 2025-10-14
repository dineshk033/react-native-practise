import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  title: string;
  viewAllRoute?: string;
};

const SectionHeader: React.FC<Props> = ({ title, viewAllRoute }) => {
  const router = useRouter();

  return (
    <View className="flex-row justify-between items-center px-4 py-2 mt-3">
      <Text className="text-xl font-semibold text-gray-900">{title}</Text>
      {viewAllRoute && (
        <Pressable onPress={() => router.push(viewAllRoute)}>
          <Text className="text-sm text-blue-500 font-medium">View All</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SectionHeader;
