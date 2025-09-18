import { create } from "zustand";

interface Category {
  id: string;
  name: string;
}

interface CategoryState {
  categories: Category[];
  activeCategoryId: string;
  setCategories: (cats: Category[]) => void;
  setActiveCategory: (id: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  activeCategoryId: "all",
  setCategories: (cats) => set({ categories: cats }),
  setActiveCategory: (id) => {
    set({ activeCategoryId: id });
  },
}));
