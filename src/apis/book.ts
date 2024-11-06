import axios from "axios";
import { Book } from "../types/book.js";
import { API_BASE_URL } from "../constant.js";

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/books`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch books: ${error}`);
  }
};

export const getBookById = async (bookId: string): Promise<Book> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch book with ID ${bookId}: ${error}`);
  }
};
