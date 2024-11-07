export interface Joke {
  id: string;
  author: string;
  content: string;
  rate: number;
  likes: number;
  dislikes: number;
  category?: string;
}
