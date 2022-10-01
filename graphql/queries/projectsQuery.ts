export const projectsQuery = `{
  projectsID {
    mainImage {
      url
    }
    describe {
      markdown
    }
    describePl {
      markdown
    }
    titlePl
    title
    liveLink
    githubLink
    onHomePage
  }
}`;
