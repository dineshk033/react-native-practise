// ProductList.tsx
import React from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import ProductCard from "./Product-cart";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
};

type Props = { products: Product[] };

const GAP = 12; // space between columns
const SIDE = 8; // screen horizontal padding

const ProductList: React.FC<Props> = ({ products }) => {
  const { width } = useWindowDimensions(); // updates on orientation/resize [web:86]
  const cardWidth = Math.floor((width - SIDE * 2 - GAP) / 2); // responsive sizing [web:93]

  return (
    <View style={{ paddingHorizontal: SIDE }}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{ width: cardWidth, marginBottom: GAP, paddingEnd: SIDE }}
          >
            <ProductCard product={item} />
          </View>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }} // two items per row [web:78]
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
