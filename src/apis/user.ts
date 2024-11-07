import axios from "axios";
import { User } from "../types/user.js";
import { API_BASE_URL } from "../constant.js";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/randomusers`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error}`);
  }
};

export const getUserById = async (userId: string): Promise<User> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/randomusers/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user with ID ${userId}: ${error}`);
  }
};
