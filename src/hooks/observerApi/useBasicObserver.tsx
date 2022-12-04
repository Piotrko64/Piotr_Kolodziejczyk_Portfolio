import { RefObject, useEffect, useState } from "react";
import { basicObserverConfig } from "../../config/basicObserverConfig";

export function useBasicObserver(
    htmlElement: RefObject<HTMLElement>,
    moreThanOnce?: boolean
) {
    const [isActive, setIsActive] = useState(false);

    let wasUsing = false;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            if (!wasUsing) {
                setIsActive(entry.isIntersecting);

                if (!moreThanOnce && entry.isIntersecting) {
                    wasUsing = true;
                }
            }
        }, basicObserverConfig);

        if (htmlElement) observer.observe(htmlElement.current!);

        return () => {
            if (htmlElement) observer.unobserve(htmlElement.current!);
        };
    }, [htmlElement]);

    return isActive;
}
