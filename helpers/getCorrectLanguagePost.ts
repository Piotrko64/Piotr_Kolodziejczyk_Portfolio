import { DescribePostLanguage } from "./../src/@types/Languages";
import { dataCorrectPostDescribeLang } from "./../src/data/dataCorrectPostDescribeLang";
import { ResponseProjectsData } from "./../src/@types/graphql/ResponseProjectsData";
import { Language } from "../src/@types/Languages";

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
