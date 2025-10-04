import { create } from "zustand";

interface ChallengeStoreType {
  focused: string;
  setFocused: (focused: ChallengeStoreType["focused"]) => void;
}

const useChallengeStore = create<ChallengeStoreType>((set) => ({
  focused: "target",
  setFocused: (focused) => set({ focused: focused }),
}));

export default useChallengeStore;
