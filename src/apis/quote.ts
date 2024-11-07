import axios from "axios";
import { Quote } from "../types/quote.js";
import { API_BASE_URL } from "../constant.js";

export const getAllQuotes = async (): Promise<Quote[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/quotes`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch quotes: ${error}`);
  }
};

export const getQuoteById = async (quoteId: string): Promise<Quote> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/quotes/${quoteId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch quote with ID ${quoteId}: ${error}`);
  }
};
