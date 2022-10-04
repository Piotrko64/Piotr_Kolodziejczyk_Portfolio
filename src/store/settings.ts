import { SettingsInterface } from "./../@types/store/SettingsInterface";
import create, { StoreApi, UseBoundStore } from "zustand";

export const useSettings: UseBoundStore<StoreApi<SettingsInterface>> = create(
    (set) => ({
        nightMode: true,
        bubbleColor: "57, 57, 57",
        toggleNightMode: () =>
            set((state) => ({ nightMode: !state.nightMode })),
        changeBubbleColor: (color: string) =>
            set(() => ({ bubbleColor: color })),
    })
);
