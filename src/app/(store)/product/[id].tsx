// ProductDetail.tsx
import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Product } from "@/types/ProductModel";
import axios from "axios";
import { Stack, useLocalSearchParams } from "expo-router";
import { getProductById } from "@/service/productService";
import CustomSafeArea from "@/components/safe-area-common";
import { StatusBar } from "expo-status-bar";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  //   const product = MOCKPRODUCT[0];
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/1`);
      setProduct(res.data);
      //   console.log(res.data);
      // You can handle the result here if needed
    };
    fetchProduct();
  }, [id]);
  const discountedPrice = useMemo(() => {
    if (product === null) return "0.00";
    const value =
      product.price - (product.price * product.discountPercentage) / 100;
    return value.toFixed(2);
  }, [product]);

  const gallery = product?.images?.length
    ? product?.images
    : [product?.thumbnail];

  const renderStars = (val: number) => {
    const icons = [];
    for (let i = 1; i <= 5; i++) {
      const diff = val - i + 1;
      const name =
        diff >= 1 ? "star" : diff >= 0.5 ? "star-half" : "star-outline";
      icons.push(
        <Ionicons key={i} name={name as any} size={16} color="#f59e0b" />
      );
    }
    return <View className="flex-row items-center gap-1">{icons}</View>;
  };

  if (!product) {
    return (
      <View>
        <Text>Recorsd not found!</Text>
      </View>
    );
  }

  return (
    <CustomSafeArea>
      <ScrollView
        className="flex-1 bg-white"
        contentInsetAdjustmentBehavior="automatic" // iOS: adjusts for translucent header
        contentContainerStyle={{ paddingTop: 24 }}
      >
        <Stack.Screen
          options={{
            title: `${product?.title ?? `Product #${id}`}`,
            headerShown: true,
            headerBackground: () => <View className="flex-1 bg-white" />,
          }}
        />
        <StatusBar style="light" translucent backgroundColor="transparent" />
        {/* Image header */}
        <View className="bg-white mt-10">
          <Image
            source={{ uri: gallery[0] }}
            className="w-full h-80"
            resizeMode="cover"
          />

          {/* Top actions over image */}
          <View className="absolute left-0 right-0 top-0 flex-row justify-between p-4">
            <Pressable className="bg-black/30 rounded-full p-2">
              <Ionicons name="chevron-back" size={22} color="#fff" />
            </Pressable>
            <View className="flex-row gap-2">
              <Pressable className="bg-black/30 rounded-full p-2">
                <Ionicons name="heart-outline" size={20} color="#fff" />
              </Pressable>
              <Pressable className="bg-black/30 rounded-full p-2">
                <Ionicons name="share-social-outline" size={20} color="#fff" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="px-4 pt-4">
          <Text className="text-xs text-emerald-600 font-medium">
            {product.brand} • {product.category}
          </Text>
          <Text className="text-2xl font-semibold text-gray-900 mt-1">
            {product.title}
          </Text>

          <View className="flex-row items-center gap-2 mt-2">
            {renderStars(product.rating)}
            <Text className="text-sm text-gray-600">
              {product.rating.toFixed(2)}
            </Text>
            <Text className="text-sm text-gray-400">
              ({product.reviews?.length ?? 0} reviews)
            </Text>
          </View>

          {/* Pricing */}
          <View className="flex-row items-end gap-2 mt-3">
            <Text className="text-2xl font-bold text-emerald-600">
              ${discountedPrice}
            </Text>
            <Text className="text-base text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </Text>
            <Text className="text-sm text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              -{product.discountPercentage}%
            </Text>
          </View>

          {/* Key badges */}
          <View className="flex-row flex-wrap gap-2 mt-3">
            <Text className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
              SKU: {product.sku}
            </Text>
            <Text className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
              {product.availabilityStatus}
            </Text>
            <Text className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
              Stock: {product.stock}
            </Text>
            <Text className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
              MOQ: {product.minimumOrderQuantity}
            </Text>
          </View>

          {/* Description */}
          <Text className="text-base text-gray-700 mt-4">
            {product.description}
          </Text>

          {/* Specs */}
          <View className="mt-5 border-t border-gray-200 pt-4">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Details
            </Text>
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-gray-600">Warranty</Text>
              <Text className="text-gray-800">
                {product.warrantyInformation}
              </Text>
            </View>
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-gray-600">Shipping</Text>
              <Text className="text-gray-800">
                {product.shippingInformation}
              </Text>
            </View>
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-gray-600">Weight</Text>
              <Text className="text-gray-800">{product.weight} g</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-600">Dimensions</Text>
              <Text className="text-gray-800">
                {product.dimensions.width} × {product.dimensions.height} ×{" "}
                {product.dimensions.depth} mm
              </Text>
            </View>
          </View>

          {/* Tags */}
          {product.tags?.length ? (
            <View className="mt-5">
              <Text className="text-lg font-semibold text-gray-900 mb-2">
                Tags
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {product.tags.map((t) => (
                  <Text
                    key={t}
                    className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md"
                  >
                    #{t}
                  </Text>
                ))}
              </View>
            </View>
          ) : null}

          {/* Reviews */}
          {product.reviews?.length ? (
            <View className="mt-6">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                Top reviews
              </Text>
              {product.reviews.slice(0, 3).map((r, idx) => (
                <View key={idx} className="mb-3">
                  <View className="flex-row items-center gap-2">
                    {renderStars(r.rating)}
                    <Text className="text-sm text-gray-500">
                      {new Date(r.date).toDateString()}
                    </Text>
                  </View>
                  <Text className="text-sm text-gray-900 mt-1">
                    {r.comment}
                  </Text>
                  <Text className="text-xs text-gray-500 mt-0.5">
                    — {r.reviewerName}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* CTAs */}
          <View className="mt-6 flex-row items-center gap-3">
            <Pressable className="flex-1 bg-emerald-600 py-3 rounded-xl items-center">
              <Text className="text-white font-semibold">Add to Cart</Text>
            </Pressable>
            <Pressable className="p-3 rounded-xl bg-gray-100">
              <Ionicons name="heart-outline" size={22} color="#ef4444" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
}
