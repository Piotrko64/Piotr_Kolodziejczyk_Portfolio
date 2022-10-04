import { DecolarCircle } from "../../../../ui/circles/DecolarCircle";
import classes from "./backCircles.module.css";
import cx from "classnames";
import { ScrollParallax } from "react-just-parallax";
import { dataBackgroundCircles } from "../../../../data/dataBackgroundCircles";

export function BackCircles() {
    return (
        <>
            {dataBackgroundCircles.map(({ name, strenth }) => (
                <ScrollParallax
                    strength={strenth}
                    lerpEase={0.6}
                    key={name}
                    isAbsolutelyPositioned
                >
                    <DecolarCircle
                        additionalClass={cx(
                            classes.circle,
                            classes[name + "Circle"]
                        )}
                    />
                </ScrollParallax>
            ))}
        </>
    );
}
