import ProtectedLayout from "@/components/ProtectedRoute";
import CustomSafeArea from "@/components/safe-area-common";
import React from "react";
import { Text, View } from "react-native";

export default function Cart() {
  return (
    <ProtectedLayout isValid={false}>
      <CustomSafeArea>
        <View className="flex-1 items-center justify-center">
          <Text>Cart</Text>
        </View>
      </CustomSafeArea>
    </ProtectedLayout>
  );
}
