import { create } from "zustand";

interface BoardingStore {
  section: number;
  setSection: (section: BoardingStore["section"]) => void;
  logout: () => void;
}

export const useBoardingStore = create<BoardingStore>((set) => ({
  section: 0, // start at 0 (first page)
  setSection: (section) => set({ section }),
  logout: () => set({ section: 0 }),
}));
