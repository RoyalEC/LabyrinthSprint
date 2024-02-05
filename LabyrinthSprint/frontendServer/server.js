import express from "express";
import WebSocket from "ws";

const app = express();
const socket = new WebSocket("ws://localhost:9002");

app.use(express.static("public"));

socket.on("open", () => {
  socket.send("I'm driving that bentley bentaga like ion love my life");
});

socket.on("message", () => {
  socket.send("");
  console.log("Message received from server");
});

// app.get("/", (req, res) => {});

app.listen(3005, () => {
  console.log("Server is listening on port 3005");
});
