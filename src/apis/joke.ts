import axios from "axios";
import { Joke } from "../types/joke.js";
import { API_BASE_URL } from "../constant.js";

export const getAllJokes = async (): Promise<Joke[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/jokes`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch jokes: ${error}`);
  }
};

export const getJokeById = async (jokeId: string): Promise<Joke> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/jokes/${jokeId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch book with ID ${jokeId}: ${error}`);
    }
  };
  