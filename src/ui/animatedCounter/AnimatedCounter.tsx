import { useEffect, useRef, useState } from "react";
import { useBasicObserver } from "../../hooks/observerApi/useBasicObserver";

export function AnimatedCounter({ endNumber }: { endNumber: number }) {
    const numberCounter = useRef(null);
    const isVisible = useBasicObserver(numberCounter);
    const [actualNumber, setActualNumber] = useState(0);

    let interval: NodeJS.Timeout;
    let speedTimeout = 110;

    function increaseActualNumber() {
        interval = setTimeout(() => {
            if (actualNumber < endNumber) {
                setActualNumber((prev) => prev + 1);
            }
        }, speedTimeout);
    }

    useEffect(() => {
        if (isVisible) {
            increaseActualNumber();
        }
        return () => {
            clearInterval(interval);
        };
    }, [isVisible, actualNumber]);

    return <span ref={numberCounter}>{actualNumber}</span>;
}
