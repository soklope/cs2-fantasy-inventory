import { create } from "zustand";
import defaultLoadout from "../assets/items/items";

const useInventoryStore = create((set) => ({
  finderIsOpen: false,
  itemName: "", // Initial state
  userLoadoutStore: JSON.parse(localStorage.getItem("userLoadout")) || defaultLoadout,

  setFinderStatus: (name) => {
    set((state) => ({
      finderIsOpen: !state.finderIsOpen,
      itemName: name,
    }));
  },

  setItemName: (name) => {
    set({ itemName: name });
  },

  updateUserLoadoutStore: (clickedItem) => {
    set((state) => {

      const updatedLoadout = state.userLoadoutStore.map((item) =>
        item.weapon?.name === state.itemName ? clickedItem : item
      );

      localStorage.setItem("userLoadout", JSON.stringify(updatedLoadout));

      return { 
        userLoadoutStore: updatedLoadout,
        finderIsOpen: false, 
      };
    });
  },

  importInventory: (importData) => {
    if (Array.isArray(importData)) {
      set({ userLoadoutStore: importData });
      localStorage.setItem("userLoadout", JSON.stringify(importData));
    }
  }
}));

export default useInventoryStore;
