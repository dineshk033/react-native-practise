import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
const CHANNEL_LIST = [
  {
    title: "BBC News",
    short: "BBC",
  },
  {
    title: "Fox News",
    short: "Fox",
  },
  {
    title: "CNN News",
    short: "CNN",
  },
  {
    title: "WSJ News",
    short: "WSJ",
  },
  {
    title: "Euro News",
    short: "Euro",
  },
  {
    title: "ABC News",
    short: "ABC",
  },
  {
    title: "INN News",
    short: "INN",
  },
];
const Item = ({ short, title, handleSelection, isSelected }) => {
  return (
    <TouchableOpacity onPress={() => handleSelection(short)}>
      <View
        className={`mr-3 flex items-center justify-center border-2   h-20 w-20 rounded-full ${
          isSelected ? "bg-blue-900 border-blue-900" : "border-blue-400 "
        }`}
      >
        <Text
          className={` font-semibold ${
            isSelected ? "text-white" : "text-blue-900"
          }`}
        >
          {short}
        </Text>
      </View>
      <Text className="text-md mt-1">{title}</Text>
    </TouchableOpacity>
  );
};
export default function TopChannels() {
  const [selectedChannel, setSelectedChannel] = useState("");
  const handleSelection = (arg) => {
    setSelectedChannel(arg);
  };
  return (
    <View className="mt-5">
      <Text className="text-lg font-bold mb-3">Top Channels</Text>
      <FlatList
        data={CHANNEL_LIST}
        keyExtractor={(item) => item.short}
        renderItem={({ item }) => (
          <Item
            short={item.short}
            title={item.title}
            isSelected={selectedChannel === item.short}
            handleSelection={handleSelection}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}
