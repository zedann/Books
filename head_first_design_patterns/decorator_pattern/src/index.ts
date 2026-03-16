import express, { type Request, type Response } from "express";
import type { ApiResponse } from "./interfaces/ApiResponse.js";
import { BaseResponse } from "./concrete/BaseResponse.js";
import { TimestampDecorator } from "./concrete/TimestampDecorator.js";
import { VersionDecorator } from "./concrete/VersionDecorator.js";

const app = express();

const PORT = 3000;

app.get("/product", (req: Request, res: Response) => {
  const rawData = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "PC" },
  ];

  let response: ApiResponse = new BaseResponse("success", 200, rawData);

  response = new TimestampDecorator(response);

  if (req.query.verbose === "true") response = new VersionDecorator(response);

  return res.json(response.getData());
});

app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
