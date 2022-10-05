import classes from "./animatedCounter.module.css";
import { useEffect, useRef, useState } from "react";
import { useBasicObserver } from "../../hooks/observerApi/useBasicObserver";

const SPEED_ANIMATION = 220;

type Props = { endNumber: number };

export function AnimatedCounter({ endNumber }: Props) {
    const numberCounter = useRef(null);
    const isVisible = useBasicObserver(numberCounter);
    const [actualNumber, setActualNumber] = useState(0);
    const [speedTimeout, setSpeedTimeout] = useState(SPEED_ANIMATION);

    let interval: NodeJS.Timeout;

    function increaseActualNumber() {
        interval = setTimeout(() => {
            if (actualNumber < endNumber) {
                setActualNumber((prevNumber) => prevNumber + 1);
                setSpeedTimeout((prevState) => prevState - 15);
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
