import { SettingsInterface } from "./../@types/store/SettingsInterface";
import create, { StoreApi, UseBoundStore } from "zustand";

export const useSettings: UseBoundStore<StoreApi<SettingsInterface>> = create(
    (set) => ({
        bubbleColor: "57, 57, 57",

        changeBubbleColor: (color: string) =>
            set(() => ({ bubbleColor: color })),
    })
);
