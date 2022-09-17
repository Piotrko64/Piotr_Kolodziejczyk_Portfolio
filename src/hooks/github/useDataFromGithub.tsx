import axios from "axios";

export function useDataFromGithub() {
    axios.get("/api/githubData").then((data: any) => console.log(data));
}
