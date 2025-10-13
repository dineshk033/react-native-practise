import { View, Text } from "react-native";
import { Link } from "expo-router";
import CustomSafeArea from "./safe-area-common";
// import
export function Header() {
  return (
    // <CustomSafeArea>
    <View className="flex-row items-center justify-between px-4 py-3 bg-blue-500 border-b border-gray-200">
      {/* <StatusBar style="light" /> */}
      <Link href="/" asChild>
        <Text className="text-xl font-semibold">ShopLite</Text>
      </Link>

      <View className=" flex flex-row gap-x-4">
        <Link href="/categories" asChild>
          <Text className="text-base">Categories</Text>
        </Link>
        <Link href="/cart" asChild>
          <Text className="text-base">Cart</Text>
        </Link>
        <Link href="/login" asChild>
          <Text className="text-base">Login</Text>
        </Link>
      </View>
    </View>
    // </CustomSafeArea>
  );
}
