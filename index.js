import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: process.env.authToken
})

async function getRepo(repo = {}) {
    const res = (await octokit.request('GET /repos/{owner}/{repo}', {
        owner: repo.owner || 'RahulGautamSingh-testing',
        repo: repo.name || 'test3'
    }))
    return res.data.private
}

console.log(await getRepo())