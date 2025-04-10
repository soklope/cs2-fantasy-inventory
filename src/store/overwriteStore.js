import { create } from "zustand";

const useOverwriteStore = create((set) => ({
  showConfirm: true,
  importStringValue: "",
  actionType: "reset",

  setShowConfirm: (value) => set({ showConfirm: value }),
  setActionType: (value) => set({ actionType: value }),
  setImportStringValue: (value) => set({ importStringValue: value }),

  handleImportStringChange: (e) => {
    set({ importStringValue: e.target.value });
  },
}));

export default useOverwriteStore