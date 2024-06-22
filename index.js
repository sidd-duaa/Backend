require('dotenv').config()
const express = require('express')
// import express from "express";
const app = express()
const port = 3000

const githubData = {
    "login": "sidd-duaa",
    "id": 123830170,
    "node_id": "U_kgDOB2F_mg",
    "avatar_url": "https://avatars.githubusercontent.com/u/123830170?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sidd-duaa",
    "html_url": "https://github.com/sidd-duaa",
    "followers_url": "https://api.github.com/users/sidd-duaa/followers",
    "following_url": "https://api.github.com/users/sidd-duaa/following{/other_user}",
    "gists_url": "https://api.github.com/users/sidd-duaa/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sidd-duaa/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sidd-duaa/subscriptions",
    "organizations_url": "https://api.github.com/users/sidd-duaa/orgs",
    "repos_url": "https://api.github.com/users/sidd-duaa/repos",
    "events_url": "https://api.github.com/users/sidd-duaa/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sidd-duaa/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Duaa Siddiqui",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-01-28T17:29:50Z",
    "updated_at": "2024-06-16T11:29:37Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Chai wih Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai or code</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})