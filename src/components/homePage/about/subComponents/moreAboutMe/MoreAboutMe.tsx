import { dataMoreAboutMe } from "@data/dataMoreAboutMe";
import styles from "./moreAboutMe.module.css";
import { SingleAbility } from "./singleAbility/SingleAbility";

export function MoreAboutMe() {
    return (
        <>
            <div className={styles.container}>
                {dataMoreAboutMe.map((ability) => {
                    return <SingleAbility {...ability} />;
                })}
            </div>
        </>
    );
}
