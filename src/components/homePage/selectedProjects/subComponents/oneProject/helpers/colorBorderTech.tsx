import { dataColorTechnologies } from "./../../../../../../data/dataColorTechnologies";
export function colorBorderTech(name: string) {
    const colorBackground = dataColorTechnologies.find((tech) =>
        name.toLowerCase().includes(tech.name.toLowerCase())
    );
    return colorBackground?.border
        ? `2px solid ${colorBackground?.border}`
        : "none";
}
