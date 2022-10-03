import { dataColorTechnologies } from "./../../../../../../data/dataColorTechnologies";
export function colorBackgroundTechnolog(name: string) {
    const colorBackground = dataColorTechnologies.find((tech) =>
        name.toLowerCase().includes(tech.name.toLowerCase())
    );
    return colorBackground?.color || false;
}
