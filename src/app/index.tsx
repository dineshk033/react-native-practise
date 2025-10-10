import BlogCard from "@/components/BlogCard";
import TopChannels from "@/components/TopChannels";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75; // 90% of screen width
const CARD_MARGIN = 10;
export default function HomePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="mx-4 flex-1">
          <View className="flex-row justify-between items-center mb-5">
            <View className="flex-row gap-3 items-center">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/45.jpg",
                }}
                className="h-10 w-10  rounded-full"
              />
              <View>
                <Text className="text-sm text-gray-400">Good Morning</Text>
                <Text className="text-lg text-gray-800">Abhisek Banara</Text>
              </View>
            </View>

            <Text>Login</Text>
          </View>
          {/* Searchbar */}
          <TextInput
            className="border rounded-xl border-gray-600 px-2"
            placeholder="Search"
          />
          {/* Top Channels */}
          <TopChannels />
          {/* Card */}
          <View className="mt-5">
            <Text className="text-lg font-bold">Recommended Podcast</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: CARD_MARGIN }}
              snapToInterval={CARD_WIDTH + CARD_MARGIN} // optional: snap effect
              decelerationRate="fast"
            >
              {[...Array(3)].map((_, i) => (
                <View style={{ width: CARD_WIDTH, paddingRight: CARD_MARGIN }}>
                  <BlogCard key={i} />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
