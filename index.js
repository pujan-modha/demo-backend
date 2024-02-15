const express = require("express");
require("dotenv").config();
const app = express();
// const port = 3000;

const githubData = {
  login: "pujan-modha",
  id: 109509620,
  node_id: "U_kgDOBob79A",
  avatar_url: "https://avatars.githubusercontent.com/u/109509620?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/pujan-modha",
  html_url: "https://github.com/pujan-modha",
  followers_url: "https://api.github.com/users/pujan-modha/followers",
  following_url:
    "https://api.github.com/users/pujan-modha/following{/other_user}",
  gists_url: "https://api.github.com/users/pujan-modha/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/pujan-modha/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/pujan-modha/subscriptions",
  organizations_url: "https://api.github.com/users/pujan-modha/orgs",
  repos_url: "https://api.github.com/users/pujan-modha/repos",
  events_url: "https://api.github.com/users/pujan-modha/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/pujan-modha/received_events",
  type: "User",
  site_admin: false,
  name: "Pujan Modha",
  company: "Manipal University, Jaipur",
  blog: "pujan.pm",
  location: "Porbandar, Gujarat, India",
  email: null,
  hireable: null,
  bio: "Windows are too small for Penguins. \r\n(I use WSL btw)",
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 6,
  following: 16,
  created_at: "2022-07-18T07:54:54Z",
  updated_at: "2024-02-13T13:31:03Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitter/pujan_modha");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
