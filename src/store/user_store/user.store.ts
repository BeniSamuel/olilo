import { create } from "zustand";
import User from "../../types/user.type";

type UserStoreType = {
  user: User | null;
  setName: (name: User["name"]) => void;
  setEmail: (email: User["email"]) => void;
  setPassword: (password: User["password"]) => void;
  logout: () => void;
};

const useUserStore = create<UserStoreType>((set) => ({
  user: null,

  setName: (name) =>
    set((state) => ({
      user: state.user ? { ...state.user, name } : { name, email: "", password: "" },
    })),

  setEmail: (email) =>
    set((state) => ({
      user: state.user ? { ...state.user, email } : { name: "", email, password: "" },
    })),

  setPassword: (password) =>
    set((state) => ({
      user: state.user ? { ...state.user, password } : { name: "", email: "", password },
    })),

  logout: () =>
    set({
      user: null,
    }),
}));

export default useUserStore;
