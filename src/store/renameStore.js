import { create } from "zustand";

const useRenameStore = create((set) => ({
  showRenameInput: false,

  toggleRenameInput: () =>
    set((state) => ({ showRenameInput: !state.showRenameInput }))
}));

export default useRenameStore;
