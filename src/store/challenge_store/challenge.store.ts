import { create } from "zustand";

interface ChallengeStoreType {
  focused: string;
  section: number;
  setSection: (section: ChallengeStoreType["section"]) => void;
  setFocused: (focused: ChallengeStoreType["focused"]) => void;
}

const useChallengeStore = create<ChallengeStoreType>((set) => ({
  focused: "target",
  section: 0,
  setSection: (section) => set({ section }),
  setFocused: (focused) => set({ focused: focused }),
}));

export default useChallengeStore;
