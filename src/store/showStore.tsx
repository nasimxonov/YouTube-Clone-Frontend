import { create } from "zustand";

type ToggleState = {
  isOpen: boolean;
  toggle: (state: boolean) => void;
};

export const changeShowcaseStore = create<ToggleState>((set) => ({
  isOpen: false,
  toggle: (state) => {
    set({ isOpen: state });
  },
}));
