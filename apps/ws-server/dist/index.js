import { WebSocketServer } from "ws";
import { client } from "@repo/db/clients";
const server = new WebSocketServer({
    port: 3001
});
server.on("connection", async (socket) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    socket.send("Hi Websocket connect successfully");
});
