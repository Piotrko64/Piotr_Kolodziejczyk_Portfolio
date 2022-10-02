export const projectsQuery = `{
  projectsID {
    mainImage {
      url
    }
    describe {
      raw
    }
    describePl {
      raw
    }
    titlePl
    title
    liveLink
    githubLink
   technologies
  }
}`;
