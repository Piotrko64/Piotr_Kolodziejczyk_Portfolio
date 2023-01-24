import { dataColorTechnologies } from "./../../../../../../data/dataColorTechnologies";
export function colorBorderTech(name: string) {
    const colorBackground = dataColorTechnologies.find((tech) =>
        name.toLowerCase().includes(tech.name.toLowerCase())
    );
    return `1.7px solid ${colorBackground?.border || "black"}`;
}
