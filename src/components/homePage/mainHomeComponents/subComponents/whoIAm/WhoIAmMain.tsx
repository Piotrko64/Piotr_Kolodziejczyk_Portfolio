import classes from "./whoIAmMain.module.css";
import { ColorfulName } from "./colorfulName/ColorfulName";
import { HelloIAm } from "./helloIAm/HelloIAm";
import { ShortDescribe } from "./shortDescribe/ShortDescribe";
import cx from "classnames";

export function WhoIAmMainComponent() {
    return (
        <header className={cx(classes.header, "flexCenter")}>
            <HelloIAm />
            <ColorfulName />
            <ShortDescribe />
        </header>
    );
}
