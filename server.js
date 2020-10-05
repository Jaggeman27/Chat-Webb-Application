const { info } = require('console');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

io.on("connection", socket => {
    socket.emit("Your id: ", socket.id);
})

server.listen(8080, () => {
    console.log("server is running on port 8080");
})