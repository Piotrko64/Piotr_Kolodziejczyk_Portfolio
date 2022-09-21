import axios from "axios";
import { useState } from "react";
import { ResultGithubData } from "../../api/githubData/ResultGithubData";

export function useDataFromGithub() {
    const [data, setData] = useState<false | ResultGithubData>(false);

    if (!data) {
        fetch(`https://myportfolio-piotrko64.vercel.app/api/githubData`)
            .then((e) => e.json())
            .then(({ data }) => {
                setData(data);
                console.log(data);
            });
    }
    console.log(data);
    return data;
}
