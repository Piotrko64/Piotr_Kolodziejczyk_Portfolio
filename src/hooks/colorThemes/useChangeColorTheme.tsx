import { useSettings } from "../../store/settings";

export function useChangeColorTheme() {
    const { toggleNightMode } = useSettings((state) => state);

    return { toggleNightMode: () => toggleNightMode };
}
