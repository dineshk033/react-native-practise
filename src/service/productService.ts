import axios from "axios";

export const getProductById = async (url: string) => {
  return await axios.get(`https://dummyjson.com/products/1`);
};
