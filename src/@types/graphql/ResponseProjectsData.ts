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
    raw: any;
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
    raw: any;
}

export interface OneProjectInterface {
    mainImage: MainImage;
    describe: Describe;
    describePl: DescribePl;
    titlePl: string;
    title: string;
    liveLink?: any;
    githubLink: string;
    technologies: string[];
    colorTheme: {
        hex: string;
    };
}

export interface ResponseProjectsData {
    projectsID: OneProjectInterface[];
}
