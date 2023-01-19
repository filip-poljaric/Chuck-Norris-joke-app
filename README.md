Hi! This is my Chuck Norris joke app. This app sends a Chuck Norris joke to a logged in user.

To make this application work, follow a few simple steps.

First download the app from my github account:https://github.com/filip-poljaric/Chuck-Norris-joke-app.

Open the chuck-norris-joke-app folder in a code editor(recommended Visual Studio Code).

In .env file you need to provide a valid MONGO_URI="(valid URI)" to connect with your database. You can get your mongoDB URI on: https://account.mongodb.com/account/login.

When you provide a valid mongoDB URI save the changes, open folders terminal and execute this two commands.

npm install

npm start

When the app is running you can send:

-post request using: http://localhost:4001/auth/register to register a user. In request body you should use a json data type:
{
"first_name":"your name",
"last_name":"your last name",
"email":"your email",
"password":"your password"
}

You can use your email adress or you can get temporary email from: https://temp-mail.org.

-post request using: http://localhost:4001/auth/login to login a user: In request body you should use a json data type:
{
"email":"your email",
"password":"your password"
}

-get request using: http://localhost:4001/jokes/get to send a joke to a logged in user.

To send a requests you can use Postman REST API client.
