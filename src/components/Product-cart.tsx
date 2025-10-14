import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  [key: string]: any;
};

type Props = {
  product: Product;
  onAddToCart?: (productId: number) => void;
  onToggleFavorite?: (productId: number) => void;
};

const ProductCard: React.FC<Props> = ({
  product,
  onAddToCart,
  onToggleFavorite,
}) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <View className="bg-white rounded-xl shadow-md p-4 mb-3">
      {/* Image */}
      <Pressable onPress={() => router.push(`(store)/product/${product.id}`)}>
        <Image
          source={{ uri: product.thumbnail }}
          className="w-full h-40 rounded-lg mb-3"
          resizeMode="cover"
        />

        {/* Title */}
        <Text
          className="text-base font-semibold text-gray-900"
          numberOfLines={2}
        >
          {product.title}
        </Text>
      </Pressable>
      s{/* Rating */}
      <View className="flex-row items-center mt-1">
        <Ionicons name="star" size={16} color="#facc15" />
        <Text className="ml-1 text-sm text-gray-700">
          {product.rating.toFixed(1)}
        </Text>
      </View>
      {/* Price */}
      <View className="flex-row items-center mt-2">
        <Text className="text-lg font-bold text-blue-600">
          ${discountedPrice}
        </Text>
        <Text className="ml-2 text-sm line-through text-gray-400">
          ${product.price.toFixed(2)}
        </Text>
      </View>
      {/* Actions */}
      <View className="flex-row justify-between items-center mt-4">
        <Pressable
          className="p-2 rounded-full bg-gray-100"
          onPress={() => onToggleFavorite?.(product.id)}
        >
          <Ionicons name="heart-outline" size={20} color="#ef4444" />
        </Pressable>
        <Pressable
          className="flex-1 ml-3 bg-blue-500 py-2 rounded-lg items-center"
          onPress={() => onAddToCart?.(product.id)}
        >
          <Text className="text-white font-medium text-sm">Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCard;
