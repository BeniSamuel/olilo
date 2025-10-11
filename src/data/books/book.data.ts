// src/data/books/book.data.ts

const books = [
  {
    id: 1,
    name: "Atomic Habits",
    status_description: "3 Notes Reviewed",
    status: "done",
    keyPoints: [
      { id: 1, chapter: 1, content: "I will never do things which I didn't plan" },
      { id: 2, chapter: 1, content: "I will never do things which I didn't plan" },
      { id: 3, chapter: 1, content: "I will never do things which I didn't plan" },
    ],
  },
  {
    id: 2,
    name: "Deep Works",
    status_description: "2 Pending",
    status: "doing",
    keyPoints: [
      { id: 1, chapter: 1, content: "I will never do things which I didn't plan" },
      { id: 2, chapter: 1, content: "I will never do things which I didn't plan" },
      { id: 3, chapter: 1, content: "I will never do things which I didn't plan" },
    ],
  },
  {
    id: 3,
    name: "Good Money Habits",
    status_description: "Not Yet",
    status: "not_done",
    keyPoints: [
      { id: 1, chapter: 1, content: "I will never do things which I didn't plan" },
      { id: 2, chapter: 1, content: "I will never do things which I didn't plan" },
      { id: 3, chapter: 1, content: "I will never do things which I didn't plan" },
    ],
  },
] as const; // 👈 VERY IMPORTANT

export default books;
