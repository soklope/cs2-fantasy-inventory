import { create } from "zustand";
import { persist } from "zustand/middleware";
import defaultCtLoadout from "../assets/loadouts/default-ct-loadout";
import defaultTLoadout from "../assets/loadouts/default-t-loadout";

const useInventoryStore = create(
  persist(
    (set, get) => ({
      finderIsOpen: false,
      currentFaction: "ct",
      itemInFocus: { name: "", category: ""},
      userCtLoadoutStore: defaultCtLoadout,
      userTLoadoutStore: defaultTLoadout,

      resetInventory: () => {
        const { currentFaction } = get();
        currentFaction === "ct"
          ? set({ userCtLoadoutStore: defaultCtLoadout })
          : set({ userTLoadoutStore: defaultTLoadout });
      },

      setFaction: (faction) => {
        set({ currentFaction: faction });
      },

      setFinderStatus: (name, category) => {
        set((state) => ({
          finderIsOpen: !state.finderIsOpen,
          itemInFocus: { name, category },
        }));
      },

      setItemName: (name, category) => {
        set({ itemInFocus: { name, category } });
      },

      updateUserLoadoutStore: (newSkinClicked) => {
        const { currentFaction, userCtLoadoutStore, userTLoadoutStore } = get();
        const currentLoadout = currentFaction === "ct" ? userCtLoadoutStore.loadout : userTLoadoutStore.loadout;
      
        const hasWeaponMatch = currentLoadout.some(
          (item) => item.weapon.name === newSkinClicked.weapon.name
        );
      
        const updatedLoadout = currentLoadout.map((item) => {
          if (hasWeaponMatch && item.weapon.name === newSkinClicked.weapon.name) {
            return newSkinClicked;
          }
      
          if (!hasWeaponMatch && item.category.name === newSkinClicked.category.name) {
            return newSkinClicked;
          }
      
          return item;
        });
      
        if (currentFaction === "ct") {
          set({
            userCtLoadoutStore: {
              ...userCtLoadoutStore,
              loadout: updatedLoadout,
            },
            finderIsOpen: false,
          });
        } else {
          set({
            userTLoadoutStore: {
              ...userTLoadoutStore,
              loadout: updatedLoadout,
            },
            finderIsOpen: false,
          });
        }
      },

      importInventory: (importData) => {
        if (importData) {
          if (importData.faction === "ct") {
            set({ userCtLoadoutStore: importData });
            set({ currentFaction: "ct" });
          } else {
            set({ userTLoadoutStore: importData });
            set({ currentFaction: "t" });
          }
        } else {
          console.error("Invalid importData structure, no loadout array found.");
        }
      }
      
    }),
    {
      name: "userLoadouts", // A combined key
      partialize: (state) => ({
        userCtLoadoutStore: state.userCtLoadoutStore,
        userTLoadoutStore: state.userTLoadoutStore,
      }),
    }
  )
);

export default useInventoryStore;
