import axios from "axios";
import { useState } from "react";
import { ResultGithubData } from "../../api/githubData/ResultGithubData";

export function useDataFromGithub() {
    const [data, setData] = useState<false | ResultGithubData>(false);

    if (!data) {
        axios
            .get(`https://myportfolio-piotrko64.vercel.app/api/githubData`)
            .then(({ data }) => {
                setData(data);
                console.log(data);
            });
    }
    console.log(data);
    return data;
}
