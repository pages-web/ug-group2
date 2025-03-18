import { create } from "zustand";

interface ResourcesModalStore {
  isOpen: boolean;
  imgs: string[];
  setImgs: (imgs: string[]) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useResourcesModal = create<ResourcesModalStore>((set) => ({
  isOpen: false,
  imgs: [],
  setImgs: (imgs: string[]) => set({ imgs }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
