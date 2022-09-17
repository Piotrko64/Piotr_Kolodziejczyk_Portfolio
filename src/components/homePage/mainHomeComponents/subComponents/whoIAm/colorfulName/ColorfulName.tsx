import { useRef } from "react";
import { useBasicObserver } from "../../../../../../hooks/observerApi/useBasicObserver";
import classes from "./colorFulName.module.css";
import cx from "classnames";

export function ColorfulName() {
    const name = useRef<HTMLDivElement>(null);
    const isVisible = useBasicObserver(name);

    return (
        <div className={cx(classes.name, isVisible && classes.show)} ref={name}>
            Piotr <br />
            Kołodziejczyk
        </div>
    );
}
