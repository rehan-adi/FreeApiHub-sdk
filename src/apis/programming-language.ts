import axios from "axios";
import { API_BASE_URL } from "../constant.js";
import { ProgrammingLanguage } from "../types/programming-language.js";

export const getAllProgrammingLanguages = async (): Promise<
  ProgrammingLanguage[]
> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/programming-languages`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get programming languages: ${error}`);
  }
};

export const getProgrammingLanguageById = async (
  languageId: string
): Promise<ProgrammingLanguage> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/programming-languages/${languageId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch programming language with ID ${languageId}: ${error}`
    );
  }
};
