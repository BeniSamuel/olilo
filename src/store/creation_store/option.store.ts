import { create } from "zustand";

interface OptionStoreType {
  focused: string;
  setFocused: (focused: OptionStoreType["focused"]) => void;
}

const useOptionStore = create<OptionStoreType>((set) => ({
  focused: "review",
  setFocused: (focused) => set({ focused: focused }),
}));

export default useOptionStore;
