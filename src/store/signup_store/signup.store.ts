import { create } from "zustand";

type SignupStoreType = {
  section: number;
  setSection: (section: SignupStoreType["section"]) => void;
  logout: () => void;
};

const useSignupStoreType = create<SignupStoreType>((set) => ({
  section: 0,
  setSection: (section) => set({ section }),
  logout: () => set({ section: 0 })
}));

export default useSignupStoreType;
