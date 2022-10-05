import classes from "./heartSVG.module.css";

export function HeartSVG() {
    return (
        <svg
            width="165"
            height="162"
            viewBox="0 0 165 162"
            fill="none"
            className={classes.heart}
        >
            <path
                d="M161 43.25C161 21.5753 142.692 4 120.11 4C103.233 4 88.7364 13.8212 82.5 27.8378C76.2636 13.8212 61.7673 4 44.8811 4C22.3167 4 4 21.5753 4 43.25C4 106.224 82.5 157.5 82.5 157.5C82.5 157.5 161 106.224 161 43.25Z"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={classes.path}
            />
        </svg>
    );
}
