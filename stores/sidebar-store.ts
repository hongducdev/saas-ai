import { create } from "zustand";

export interface SidebarStore {
  isOpen: boolean;
  handleOpenOrClose: () => void;
  handleClose: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  handleOpenOrClose: () =>
    set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleClose: () => set((state) => ({ ...state, isOpen: false })),
}));
