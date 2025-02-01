import { create } from "zustand";

export const useSearchStore = create((set, get) => ({
  search:'',
  setSearch: (search) => set({ search })
}))