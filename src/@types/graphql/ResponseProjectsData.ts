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

export interface Raw {
    children: Child[];
}

export interface Describe {
    raw: Raw;
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
    raw: Raw2;
}

export interface ProjectsID {
    mainImage: MainImage;
    describe: Describe;
    describePl: DescribePl;
    titlePl: string;
    title: string;
    liveLink?: any;
    githubLink: string;
}

export interface ResponseProjectsData {
    projectsID: ProjectsID[];
}
