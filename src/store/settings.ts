import create from "zustand";

export const useSettings = create((set) => ({
    nightMode: true,
}));
