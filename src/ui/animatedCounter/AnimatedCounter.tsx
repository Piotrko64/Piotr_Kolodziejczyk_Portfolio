import classes from "./animatedCounter.module.css";
import { useEffect, useRef, useState } from "react";
import { useBasicObserver } from "../../hooks/observerApi/useBasicObserver";

export function AnimatedCounter({ endNumber }: { endNumber: number }) {
    const numberCounter = useRef(null);
    const isVisible = useBasicObserver(numberCounter);
    const [actualNumber, setActualNumber] = useState(0);
    const [speedTimeout, setSpeedTimeout] = useState(200);

    let interval: NodeJS.Timeout;

    function increaseActualNumber() {
        interval = setTimeout(() => {
            if (actualNumber < endNumber) {
                setActualNumber((prevNumber) => prevNumber + 1);
                setSpeedTimeout((prevState) => prevState - 12);
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

    return (
        <div
            ref={numberCounter}
            className={actualNumber === endNumber ? classes.scale : ""}
        >
            {actualNumber}
        </div>
    );
}
