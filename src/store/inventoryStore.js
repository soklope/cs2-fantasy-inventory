import { create } from "zustand";
import { persist } from "zustand/middleware";
import defaultCtLoadout from "../assets/loadouts/default-ct-loadout";
import defaultTLoadout from "../assets/loadouts/default-t-loadout";

const useInventoryStore = create(
  persist(
    (set, get) => ({
      finderIsOpen: false,
      currentFaction: "counter-terrorists",
      itemInFocus: { name: "", category: ""},
      userCtLoadoutStore: defaultCtLoadout,
      userTLoadoutStore: defaultTLoadout,

      resetInventory: () => {
        const { currentFaction } = get();
        currentFaction === "counter-terrorists"
          ? set({ userCtLoadoutStore: defaultCtLoadout })
          : set({ userTLoadoutStore: defaultTLoadout });
      },

      setFaction: (faction) => {
        set({ currentFaction: faction});
      },

      setFinderStatus: (name, category) => {
        set((state) => ({
          finderIsOpen: !state.finderIsOpen,
          itemInFocus: { name, category },
        }));
      },

      updateLoadoutName: (name) => {
        const { currentFaction } = get();

        if (currentFaction === "counter-terrorists") {
          set((state) => ({
            userCtLoadoutStore: {
              ...state.userCtLoadoutStore,
              name: name
            }
          }))
        } else {
          set((state) => ({
            userTLoadoutStore: {
              ...state.userTLoadoutStore,
              name: name
            }
          }))
        }
      },

      updateUserLoadoutStore: (newSkinClicked) => {
        const { currentFaction, userCtLoadoutStore, userTLoadoutStore } = get();
        const currentLoadout =
          currentFaction === "counter-terrorists"
            ? userCtLoadoutStore.loadout
            : userTLoadoutStore.loadout;
      
        const hasWeaponMatch = currentLoadout.some(
          (item) => item.weapon?.name === newSkinClicked.weapon?.name
        );
      
        const updatedLoadout = currentLoadout.map((item) => {
          if (hasWeaponMatch && item.weapon?.name === newSkinClicked.weapon?.name) {
            return newSkinClicked;
          }
      
          if (!hasWeaponMatch && item.category?.name === newSkinClicked.category?.name) {
            return newSkinClicked;
          }
      
          return item;
        });
      
        if (currentFaction === "counter-terrorists") {
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
          if (importData.faction === "counter-terrorists") {
            set({ userCtLoadoutStore: importData });
            set({ currentFaction: "counter-terrorists" });
          } else {
            set({ userTLoadoutStore: importData });
            set({ currentFaction: "terrorists" });
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