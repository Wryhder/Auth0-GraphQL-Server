# Auth0 GraphQL Server
A GraphQL server created with Node.js and secured using Auth0

> _Project is based on [this tutorial](https://auth0.com/blog/build-and-secure-a-graphql-server-with-node-js/) from the Auth0 blog_

## Local Setup

1. `git clone ` this repo and run `npm install` in the root directory to download dependencies

2. Run `npm start` to start server

3. Access the GraphQL playground in your browser @ http://localhost:4000/playground to send queries to the server

__NB:__ You'll need a `.env` file in the root directory to set up environment variables:
```bash
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
API_IDENTIFIER=YOUR_API_IDENTIFIER
```
...where `YOUR_AUTH0_DOMAIN` and `YOUR_API_IDENTIFIER` are values you can get by creating an Auth0 API at https://manage.auth0.com/#/apis. (You'll also need an access token that'll be sent in a request header.)

For help with all of the above authentication details, see the _Securing a GraphQL Server with Auth0_ section of [the tutorial](https://auth0.com/blog/build-and-secure-a-graphql-server-with-node-js/).