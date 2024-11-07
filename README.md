# FreeApiHub SDK

A TypeScript SDK for **FreeApiHub**, providing simple access to free APIs with support for data retrieval and integration. Ideal for JavaScript and TypeScript projects.

## Features

- **Simple API calls** to interact with different endpoints (e.g., books, jokes, quotes).
- **TypeScript support** for type safety and better developer experience.
- **Easy to integrate** into your JavaScript or TypeScript projects.

## Installation

You can install the SDK via npm or pnpm.

### Using npm

```bash
npm install freeapihub
```

### Using pnpm

```bash
pnpm add freeapihub
```

## Usage

### Import the SDK

In your JavaScript or TypeScript file, import the necessary functions.

```bash
import { getAllBooks, getBookById } from 'freeapihub';
```

### Example 1: Fetching all books

```tsx
import { getAllBooks } from "freeapihub";

const fetchBooks = async () => {
  try {
    const books = await getAllBooks();
    console.log(books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

fetchBooks();
```

### Example 2: Fetch a Book by ID

```tsx
import { getBookById } from "freeapihub";

const fetchBook = async (bookId: string) => {
  try {
    const book = await getBookById(bookId);
    console.log(book);
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
  }
};

fetchBook("book-id-here");
```

### Available Methods

- `getAllJokes`: Fetches all jokes from the API.
- `getJokeById(bookId: string)`: Fetches a joke by its ID.
- `getAllBooks`: Fetches all books from the API.
- `getBookById(bookId: string)`: Fetches a book by its ID.
- `getAllUsers`: Fetches all users from the API.
- `getUserById(userId: string)`: Fetches a user by their ID.
- `getAllStocks`: Fetches all stock data.
- `getStockById(stockId: string)`: Fetches stock data by its ID.
- `getAllQuotes`: Fetches all quotes.
- `getQuoteById(quoteId: string)`: Fetches a quote by its ID.
- `getAllProducts`: Fetches all products.
- `getProductById(productId: string)`: Fetches a product by its ID.
- `getAllProgrammingLanguages`: Fetches all programming languages.
- `getProgrammingLanguageById(languageId: string)`: Fetches a programming language by its ID.

## API Documentation

For detailed documentation on each API endpoint, refer to the FreeApiHub API documentation.

### Author

Created by Rehan.
