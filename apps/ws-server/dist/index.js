"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const clients_1 = require("@repo/db/clients");
const server = new ws_1.WebSocketServer({
    port: 3001,
    host: '0.0.0.0' // This makes it listen on all network interfaces
});
server.on("connection", async (socket) => {
    await clients_1.client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    socket.send("Hi Websocket connect successfully");
});
