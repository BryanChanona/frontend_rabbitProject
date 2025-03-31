export interface Book {
    id: number;
    author: string;
    title: string;
    available: boolean;
  }
  
  export interface BookResponse {
    added: boolean;
    books: Book[];
  }
  