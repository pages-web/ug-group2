import { create } from "zustand";

type BusinessClass = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useBusinessClass = create<BusinessClass>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
