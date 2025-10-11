// src/types/book.ts
export type KeyPoint = {
  id: number;
  chapter: number;
  content: string;
};

export interface Book {
  id: number;
  name: string;
  status_description: string;
  status: "done" | "doing" | "not_done";
  keyPoints: readonly KeyPoint[];
}

