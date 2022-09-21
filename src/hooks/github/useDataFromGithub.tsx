import axios from "axios";
import { useState } from "react";
import { ResultGithubData } from "../../api/githubData/ResultGithubData";

export function useDataFromGithub() {
    const [data, setData] = useState<false | ResultGithubData>(false);

    return data;
}
