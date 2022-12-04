import { DescribePostLanguage } from "../@types/Languages";
import { ArrayProjects, Order } from "../@types/graphql/ResponseProjectsData";
import { Language } from "../@types/Languages";
import { dataCorrectPostDescribeLang } from "../data/dataCorrectPostDescribeLang";

export function getCorrectLanguagePost(
    responseQuery: ArrayProjects,
    lang: Language
) {
    const nameDescribe: DescribePostLanguage =
        dataCorrectPostDescribeLang.find(
            (describePost) => describePost.lang === lang
        )?.describeName || "describe";

    const correctLanguageResponseQuery = responseQuery;
    correctLanguageResponseQuery.forEach((post) => {
        post.describe = post[nameDescribe];
    });

    return correctLanguageResponseQuery.sort((first: Order, second: Order) =>
        first.order < second.order ? -1 : 1
    );
}
