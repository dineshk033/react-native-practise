import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
};

type Props = {
  product: Product;
  onAddToCart?: (id: number) => void;
  onToggleFavorite?: (id: number) => void;
};

const ProductHorizontalCard: React.FC<Props> = ({
  product,
  onAddToCart,
  onToggleFavorite,
}) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <View className="flex-row bg-white rounded-xl shadow-md p-3 w-full max-w-xl mb-3">
      {/* Image Section */}
      <Image
        source={{ uri: product.thumbnail }}
        className="w-28 h-28 rounded-lg"
        resizeMode="cover"
      />

      {/* Info Section */}
      <View className="flex-1 ml-4 justify-between">
        <View>
          <Text
            className="text-base font-semibold text-gray-900"
            numberOfLines={2}
          >
            {product.title}
          </Text>

          <View className="flex-row items-center mt-1">
            <Text className="text-lg font-bold text-blue-600">
              ${discountedPrice}
            </Text>
            <Text className="ml-2 text-sm line-through text-gray-400">
              ${product.price.toFixed(2)}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-3">
          <Pressable
            className="p-2 rounded-full bg-gray-100"
            onPress={() => onToggleFavorite?.(product.id)}
          >
            <Ionicons name="heart-outline" size={20} color="#ef4444" />
          </Pressable>
          <Pressable
            className="bg-blue-500 px-4 py-2 rounded-lg"
            onPress={() => onAddToCart?.(product.id)}
          >
            <Text className="text-white text-sm font-medium">Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductHorizontalCard;
