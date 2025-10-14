import StoreHeader from "@/components/Header";
import HCarousel from "@/components/HorizontalCarousel";
import ProductCard from "@/components/Product-cart";
import ProductList from "@/components/ProductList";
import CustomSafeArea from "@/components/safe-area-common";
import SectionHeader from "@/components/SectionHeader";
import { MOCKPRODUCT } from "@/lib/product-mock";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rootcomponent() {
  return (
    <CustomSafeArea>
      <StoreHeader />
      <View className="flex-1 px-3">
        <SectionHeader
          title="Trending Product"
          viewAllRoute="/search-product"
        />
        <HCarousel items={MOCKPRODUCT} />
        <SectionHeader title="All Products" viewAllRoute="/category/12" />
        <ProductList products={MOCKPRODUCT} />
      </View>
    </CustomSafeArea>
  );
}
