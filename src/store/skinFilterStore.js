import { create } from "zustand";

const useSkinFilterStore = create((set) => ({
    skinsInFinder: [],
    skinsInFinderCopy: [],

    setSkinsInFinder: (skinArray) => {
      set((state) => ({
        ...state,
        skinsInFinder: skinArray,
      }));
    },

    setSkinsInFinderCopy: (skinArray) => {
      set((state) => ({
        ...state,
        skinsInFinderCopy: skinArray,
      }));
    },


}));

export default useSkinFilterStore;
