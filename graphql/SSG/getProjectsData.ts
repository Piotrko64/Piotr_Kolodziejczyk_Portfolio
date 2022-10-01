import { gql, GraphQLClient } from "graphql-request";
import { projectsQuery } from "../queries/projectsQuery";

export async function getProjectsData() {
    const hygraph = new GraphQLClient(process.env.HYGRAPHURL!, {
        headers: {
            Authorization: `Bearer ${process.env.KEYHYGRAPH}`,
        },
    });

    const QUERY = gql`
        ${projectsQuery}
    `;

    const dataProjects = await hygraph.request(QUERY);
    return dataProjects;
}
