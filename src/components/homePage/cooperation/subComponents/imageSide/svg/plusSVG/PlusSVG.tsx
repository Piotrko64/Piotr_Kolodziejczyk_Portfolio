import classes from "./plusSVG.module.css";

export function PlusSVG() {
    return (
        <svg
            width="77"
            height="77"
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M38.5 4V73M73 38.5H4"
                className={classes.color}
                strokeWidth="6.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
