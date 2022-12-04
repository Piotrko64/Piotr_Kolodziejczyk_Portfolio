import { RichTextContent } from "@graphcms/rich-text-types";

export interface MainImage {
    url: string;
}

export interface Child2 {
    text: string;
}

export interface Child {
    type: string;
    children: Child2[];
}

export interface Describe {
    raw: RichTextContent;
}

export interface Child4 {
    text: string;
}

export interface Child3 {
    type: string;
    children: Child4[];
}

export interface Raw2 {
    children: Child3[];
}

export interface DescribePl {
    raw: RichTextContent;
}

export interface OneProjectInterface {
    mainImage: MainImage;
    describe: Describe;
    describePl: DescribePl;
    titlePl: string;
    title: string;
    liveLink?: string;
    githubLink: string;
    technologies: string[];
    colorTheme: {
        hex: string;
    };
    order: number;
}

export type ArrayProjects = OneProjectInterface[];

export interface ResponseProjectsData {
    projectsID: ArrayProjects;
}

export interface Order {
    order: number;
}
