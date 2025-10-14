import CustomSafeArea from "@/components/safe-area-common";
import React from "react";
import { Text, View } from "react-native";

export default function Register() {
  return (
    <CustomSafeArea>
      <View className="flex-1 bg-blue-400 justify-center items-center">
        <Text className="bg-amber-300">Register</Text>
      </View>
    </CustomSafeArea>
  );
}
