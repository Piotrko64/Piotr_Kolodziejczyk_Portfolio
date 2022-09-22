import axios from "axios";
import { useState } from "react";
import { ResultGithubData } from "../../api/githubData/ResultGithubData";

export async function useDataFromGithub() {
    const [data, setData] = useState<false | ResultGithubData>(false);
    await fetch(`${process.env.URLPAGE}/api/githubData`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((e) => e.json())
        .then((dataR) => setData(dataR));
    return data;
}
