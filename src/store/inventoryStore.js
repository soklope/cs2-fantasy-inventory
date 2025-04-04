import { create } from "zustand";
import defaultLoadout from "../assets/items/default-loadout.json";

const useInventoryStore = create((set) => ({
  finderIsOpen: false,
  item: {
    name: "",
    category: ""
  },
  userLoadoutStore: JSON.parse(localStorage.getItem("userLoadout")) || defaultLoadout,

  setFinderStatus: (name, category) => {
    set((state) => ({
      finderIsOpen: !state.finderIsOpen,
      item: {
        name: name,
        category: category
      },
    }));
  },

  setItemName: (name, category) => {
    set({ 
      item: {
        name: name,
        category: category
      }
    });
  },

  updateUserLoadoutStore: (clickedItem) => {
    set((state) => {
      const hasWeaponMatch = state.userLoadoutStore.some(
        (item) => item.weapon.name === clickedItem.weapon.name
      );
  
      const updatedLoadout = state.userLoadoutStore.map((item) => {
        if (hasWeaponMatch && item.weapon.name === clickedItem.weapon.name) {
          return clickedItem;
        }
  
        if (!hasWeaponMatch && item.category.name === clickedItem.category.name) {
          return clickedItem;
        }
  
        return item;
      });
  
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
