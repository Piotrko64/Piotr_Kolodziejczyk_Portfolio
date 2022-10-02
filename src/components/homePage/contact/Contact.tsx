import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";

export function Contact() {
    const { t } = useTranslation("titles");

    return (
        <>
            <BigTitle title={t("contact")} />
        </>
    );
}
