import { DescribePostLanguage } from "../@types/Languages";
import { ResponseProjectsData } from "../@types/graphql/ResponseProjectsData";
import { Language } from "../@types/Languages";
import { dataCorrectPostDescribeLang } from "../data/dataCorrectPostDescribeLang";

export function getCorrectLanguagePost(
    responseQuery: ResponseProjectsData,
    lang: Language
) {
    const nameDescribe: DescribePostLanguage =
        dataCorrectPostDescribeLang.find(
            (describePost) => describePost.lang === lang
        )?.describeName || "describe";

    const correctLanguageResponseQuery = responseQuery;
    correctLanguageResponseQuery.projectsID.forEach((post) => {
        post.describe = post[nameDescribe];
    });

    return correctLanguageResponseQuery;
}
