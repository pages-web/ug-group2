import { create } from "zustand";

interface ImageModalStore {
  isOpen: boolean;
  img: string | undefined;
  className: string | undefined;
  onOpen: (img: string, className?: string) => void;
  onClose: () => void;
}

export const useImageModal = create<ImageModalStore>((set) => ({
  isOpen: false,
  img: undefined,
  className: undefined,
  onOpen: (img: string, className?: string) =>
    set({ isOpen: true, img, className }),
  onClose: () => set({ isOpen: false, img: undefined }),
}));
