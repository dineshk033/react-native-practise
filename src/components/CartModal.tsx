import React from "react";
import { View, Text, Pressable, FlatList, Image } from "react-native";
import Modal from "react-native-modal";
import { router } from "expo-router";

export default function CartModal({ visible, onClose, items }) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      backdropOpacity={0.4}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white rounded-t-3xl p-5 min-h-[50%] max-h-[65%]">
        <View className="w-12 h-1.5 bg-gray-300 self-center rounded-full mb-3" />

        <Text className="text-lg font-semibold mb-4">Your Cart</Text>

        {items.length === 0 ? (
          <Text className="text-gray-500 text-center py-10">
            Your cart is empty!
          </Text>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="flex-row items-center mb-4 bg-gray-100 p-3 rounded-xl">
                <Image
                  source={{ uri: item.image }}
                  className="w-14 h-14 rounded-lg mr-3"
                  resizeMode="cover"
                />
                <View className="flex-1">
                  <Text className="font-semibold">{item.title}</Text>
                  <Text className="text-gray-500">{item.price}</Text>
                </View>
                <Text className="text-base font-semibold mx-2">
                  x{item.quantity}
                </Text>
              </View>
            )}
          />
        )}

        {items.length > 0 && (
          <Pressable
            className="bg-black py-3 rounded-xl mt-3"
            onPress={() => {
              onClose();
              router.push("/cart");
            }}
          >
            <Text className="text-white font-semibold text-center">
              View Full Cart
            </Text>
          </Pressable>
        )}
      </View>
    </Modal>
  );
}
