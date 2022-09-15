import { useState } from "react";

export function useCheckScroll() {
    const [scroll, setScroll] = useState(0);
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => setScroll(window.scrollY));
    }
    return scroll;
}
