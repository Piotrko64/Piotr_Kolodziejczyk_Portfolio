import useTranslation from "next-translate/useTranslation";
import { BigTitle } from "../../../ui/bigTitle/BigTitle";
import { ImageSide } from "./subComponents/imageSide/ImageSide";

export function Cooperation() {
    const { t } = useTranslation("titles");
    return (
        <>
            <BigTitle title={t("coop")} />
            <ImageSide />
        </>
    );
}
