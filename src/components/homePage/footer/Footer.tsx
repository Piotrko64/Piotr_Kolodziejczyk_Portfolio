import { dataSocialMedia } from "../../../data/dataSocialMedia";
import { SingleSocial } from "./subComponents/singleSocial/SingleSocila";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            {dataSocialMedia.map((social) => (
                <SingleSocial
                    key={social.title}
                    imgURL={social.image}
                    altText={social.title}
                    link={social.link}
                />
            ))}
        </footer>
    );
}
