import { useEffect, useRef } from "react";
import { useInitCanvas } from "../../hooks/canvas/useInitCanvas";
import classes from "./theCanvas.module.css";
import { ChildrenProps } from "../../@types/ChildrenProps";
import { useSettings } from "../../store/settings";

export function CanvasContainer({ children }: ChildrenProps) {
    const canvas = useRef<HTMLCanvasElement>(null);
    const { animateCanvas } = useInitCanvas();
    const { bubbleColor } = useSettings((state: any) => state);

    useEffect(() => {
        animateCanvas(canvas.current!);
    }, [canvas, bubbleColor]);

    return (
        <>
            <canvas className={classes.theCanvas} ref={canvas}></canvas>
            <div className={classes.relative}>{children}</div>
        </>
    );
}
