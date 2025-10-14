import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: `Product #${id}`,
          headerShown: true,
          headerBackground: () => <View className="flex-1 bg-white" />,
        }}
      />
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Viewing Product ID: {id}</Text>
      </View>
    </>
  );
}
