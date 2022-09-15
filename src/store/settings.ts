import create from "zustand";

export const useSettings = create((set) => ({
    nightMode: true,
    bubbleColor: "57, 57, 57",
    changeBubbleColor: (color: string) => set(() => ({ bubbleColor: color })),
}));
