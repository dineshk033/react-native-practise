// components/HCarousel.tsx
import React, { useMemo } from "react";
import { FlatList, View, useWindowDimensions } from "react-native";
import ProductCard from "./Product-cart";
import { Product } from "@/types/ProductModel";

const GAP = 12; // space between cards
const SIDE = 16; // horizontal padding

export default function HCarousel({
  items,
  onPress,
}: {
  items: Product[];
  onPress?: (id: string) => void;
}) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = useMemo(() => Math.round(width * 0.72), [width]); // visible card + preview next [web:86]
  const SNAP = CARD_WIDTH + GAP;

  return (
    <View className="">
      <FlatList
        data={items}
        horizontal
        keyExtractor={(it) => it.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH, marginRight: GAP }}>
            <ProductCard product={item} />
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: SIDE }}
        // Snapping for a slick carousel feel:
        snapToInterval={SNAP}
        decelerationRate="fast"
        snapToAlignment="start"
        // Performance recommendations:
        initialNumToRender={5}
        windowSize={7}
        removeClippedSubviews
      />
    </View>
  );
}
