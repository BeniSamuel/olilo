import { create } from "zustand";

type ReviewStoreType = {
  section: number;
  setSection: (section: ReviewStoreType["section"]) => void;
  logout: () => void;
};

const useReviewStore = create<ReviewStoreType>((set) => ({
  section: 0,
  setSection: (section) => set({ section }),
  logout: () => ({ section: 0 }),
}));

export default useReviewStore;
