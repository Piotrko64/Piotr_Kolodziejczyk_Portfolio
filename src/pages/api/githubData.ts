import { configPuppeteer } from "../../config/configPuppeteer";
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { GithubApiResponse } from "../../@types/api/GithubApiResponse";

const URLGithub = "https://github.com/Piotrko64";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<GithubApiResponse>) {
    const browser = await puppeteer.launch(configPuppeteer);
    const page = await browser.newPage();
    await page.goto(URLGithub);

    const followersElementHTML = await page.$(".Link--secondary.no-underline.no-wrap > span");
    const dataFollowers = await page.evaluate((element) => element?.innerHTML, followersElementHTML);

    const numberProjectsElementHTML = await page.$(
        ".UnderlineNav-body.width-full.p-responsive > a:nth-child(2) > span"
    );
    const dataProjects = await page.evaluate((element) => element?.innerHTML, numberProjectsElementHTML);

    res.status(200).json({ followers: +dataFollowers!, numberProjects: +dataProjects! });
}
