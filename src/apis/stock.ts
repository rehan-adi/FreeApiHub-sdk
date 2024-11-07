import axios from "axios";
import { Stock } from "../types/stock.js";
import { API_BASE_URL } from "../constant.js";

export const getAllStocks = async (): Promise<Stock[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/stocks`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch stocks: ${error}`);
  }
};

export const getStockById = async (stockId: string): Promise<Stock> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/stocks/${stockId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch stock with ID ${stockId}: ${error}`);
  }
};
