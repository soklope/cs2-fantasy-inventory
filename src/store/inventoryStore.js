import { create } from "zustand";
import { persist } from "zustand/middleware";
import defaultLoadout from "../assets/items/default-loadout.json";

const useInventoryStore = create(
  persist(
    (set, get) => ({
      finderIsOpen: false,
      item: { name: "", category: ""},
      userLoadoutStore: defaultLoadout,

      resetInventory: () => {
        set({ userLoadoutStore: defaultLoadout });
      },

      setFinderStatus: (name, category) => {
        set((state) => ({
          finderIsOpen: !state.finderIsOpen,
          item: { name, category },
        }));
      },

      setItemName: (name, category) => {
        set({ item: { name, category } });
      },

      updateUserLoadoutStore: (clickedItem) => {
        const current = get().userLoadoutStore;

        const hasWeaponMatch = current.some(
          (item) => item.weapon.name === clickedItem.weapon.name
        );

        const updatedLoadout = current.map((item) => {
          if (hasWeaponMatch && item.weapon.name === clickedItem.weapon.name) {
            return clickedItem;
          }

          if (!hasWeaponMatch && item.category.name === clickedItem.category.name) {
            return clickedItem;
          }

          return item;
        });

        set({ userLoadoutStore: updatedLoadout, finderIsOpen: false });
      },

      importInventory: (importData) => {
        if (Array.isArray(importData)) {
          set({ userLoadoutStore: importData });
        }
      }
    }),
    {
      name: "userLoadout", // key in localStorage
      partialize: (state) => ({ userLoadoutStore: state.userLoadoutStore }), // only persist this
    }
  )
);

export default useInventoryStore;
