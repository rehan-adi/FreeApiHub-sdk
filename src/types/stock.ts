export interface Stock {
  id: string;
  name: string;
  symbol: string;
  listingDate: Date;
  isin: string;
  marketCap: number;
  currentPrice: number;
  highLow: string;
  stockPE: number;
  bookValue: number;
  dividendYield: number;
  roce: number;
  roe: number;
}
