import { configPuppeteer } from "../../config/configPuppeteer";
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { GithubApiResponse } from "../../@types/api/GithubApiResponse";

const URLGithub = "https://github.com/Piotrko64";

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<GithubApiResponse>
) {
    res.status(404).json({
        followers: 0,
        numberProjects: 0,
    });
}
