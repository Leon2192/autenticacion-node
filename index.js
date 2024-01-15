const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const routes = require('./routes/Users');

if (process.env.NODE_ENV !== "production") {
    require('dotenv/config')
}

const { PORT } = process.env

app.use(express.json()) // Middleware

routes(app);



server.listen(PORT, () => {
    console.log('Hola mundo con Node js y Express', PORT)
})