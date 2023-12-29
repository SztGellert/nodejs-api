# nodejs-api

This is a back-end and front-end service that allows a user to display posts and filter them. This implementation uses NodeJS with ExpressJS Framework.

Prequisites:

download node.js Latest LTS Version. This app is using 20.9.0 (includes npm 10.1.0) https://nodejs.org/en/download/

npm install express --save

run app: cd to app folder

node app.js

Endpoints:

"/api/posts/:id/comments" (GET): List posts or optionally list related comments by id. query params:

            id (int)

"/api/tags/:name/" (GET): List posts based on tags. query params:

            name (string)
