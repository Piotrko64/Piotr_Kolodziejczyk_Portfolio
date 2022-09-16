import { PhotoWithCirclesMainComponent } from "./subComponents/photoWithCircles/PhotoWithCirclesMainComponent";
import { WhoIAmMainComponent } from "./subComponents/whoIAm/WhoIAmMain";
import classes from "./mainHomeComponent.module.css";
import cx from "classnames";

export function MainHomeComponent() {
    return (
        <main className={classes.marginMain}>
            <div className={cx(classes.flexRow, classes.container)}>
                <WhoIAmMainComponent />
                <PhotoWithCirclesMainComponent />
            </div>
        </main>
    );
}
