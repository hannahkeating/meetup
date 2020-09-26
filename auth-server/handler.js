"use strict";

const axios = require("axios");

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=n1f3ovuo42aps4e1ke23k7etbr" +
    "&client_secret=kghc17bpes3v06cmdrf4inihqa" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://hannahkeating.github.io/meetup/" +
    "&code=37fd9f0fb3cbdbc74e60355cc8779f9d" +
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=n1f3ovuo42aps4e1ke23k7etbr" +
    "&client_secret=kghc17bpes3v06cmdrf4inihqa" +
    "&grant_type=refresh_token" +
    "&refresh_token=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      //"Access-Control-Allow-Origin": "http://localhost:8080"
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
