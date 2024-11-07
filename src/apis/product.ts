import axios from "axios";
import { Product } from "../types/product.js";
import { API_BASE_URL } from "../constant.js";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/products`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};

export const getProductById = async (productId: string): Promise<Product> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch product with ID ${productId}: ${error}`);
  }
};
