import { create } from "zustand";
import { persist } from "zustand/middleware";
import defaultCtLoadout from "../assets/loadouts/default-ct-loadout";
import defaultTLoadout from "../assets/loadouts/default-t-loadout";

const useInventoryStore = create(
  persist(
    (set, get) => ({
      finderIsOpen: false,
      currentFaction: "counter-terrorists",
      itemInFocus: { id: "", name: "", category: "", weaponType: ""},

      swapableItem: null,
      weaponSwapMode: false,
      
      userCtLoadoutStore: defaultCtLoadout,
      userTLoadoutStore: defaultTLoadout,

      resetInventory: () => {
        const { currentFaction } = get();
      
        const filteredCt = {
          ...defaultCtLoadout,
          loadout: defaultCtLoadout.loadout.filter(weapon => weapon.isDefault)
        };
      
        const filteredT = {
          ...defaultTLoadout,
          loadout: defaultTLoadout.loadout.filter(weapon => weapon.isDefault)
        };
      
        currentFaction === "counter-terrorists"
          ? set({ userCtLoadoutStore: filteredCt })
          : set({ userTLoadoutStore: filteredT });
      },

      setFaction: (faction) => {
        set({ currentFaction: faction});
      },

      setFinderStatus: (id, name, category, weaponType) => {
        set((state) => ({
          finderIsOpen: !state.finderIsOpen,
          itemInFocus: {id, name, category, weaponType},
        }));
      },

      setFinderStatusWithSwap: (id, name, category, weaponType) => {
        set(() => ({
          itemInFocus: {id, name, category, weaponType},
        }));
      },

      setSwapableItem: (skin) => {
        set(() => ({
          swapableItem: skin,
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

      toggleWeaponSwapMode: (mode) => {
        set(() => ({
          weaponSwapMode: mode,
        }));
      },

      updateUserLoadoutStore: (newSkinClicked) => {
        const { currentFaction, userCtLoadoutStore, userTLoadoutStore, itemInFocus, setSwapableItem, swapableItem} = get();
        const currentLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore.loadout : userTLoadoutStore.loadout;
        const itemToReplace = swapableItem === null ? itemInFocus : swapableItem;

        const updatedLoadout = currentLoadout.map((item) =>
          item.id === itemToReplace.id ? newSkinClicked : item
        );

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

        setSwapableItem(null)
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