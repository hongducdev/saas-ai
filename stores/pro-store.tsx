import { create } from "zustand";

export interface ProState {
  isOpen: boolean;
  handleOpenOrCloseProModal: () => void;
  handleCloseModal: () => void;
}

export const useProStore = create<ProState>((set) => ({
  isOpen: false,
  handleOpenOrCloseProModal: () =>
    set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleCloseModal: () => set((state) => ({ ...state, isOpen: false })),
}));
