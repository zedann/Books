import express from "express";
import { DatabaseConnection } from "./concrete/DatabaseConnection.js";
const app = express();

const PORT = 3000;

app.get("/user/:id", (req, res, next) => {
  const db = DatabaseConnection.getInstance();
  const data = db.query(`SELECT * FROM users WHERE ${req.params.id}`);
  res.json(data);
});
app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
