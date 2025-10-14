export type Challenges = {
  id: number;
  title: string;
  questions: {
    id: number;
    problem: string;
    category: string;
    options: {
      id: number;
      answer: string;
      result: string;
    }[];
  }[];
};
