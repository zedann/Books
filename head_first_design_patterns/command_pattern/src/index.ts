import express from "express";
import { RemoteControll } from "./concrete/RemoteControll.js";
import { Light } from "./concrete/Light.js";
import { LightOnCommand } from "./concrete/LightOnCommand.js";
const app = express();

const PORT = 3000;

const remote = new RemoteControll();

const livingRoomLight = new Light();

app.post("/light/on", (req, res) => {
  const lightOn = new LightOnCommand(livingRoomLight);
  remote.submit(lightOn);

  res.send({ message: "Command Executed : Light On" });
});

app.post("/undo", (req, res) => {
  remote.undoLast();

  res.send({ message: "Command Executed : Last Action Undo" });
});

app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
