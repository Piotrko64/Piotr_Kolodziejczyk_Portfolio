import create from "zustand";

const useSettings = create((set) => ({
    bears: 0,

    removeAllBears: () => set({ bears: 0 }),
}));
