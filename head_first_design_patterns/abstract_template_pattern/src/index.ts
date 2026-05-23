import express from "express";
import { ExcelDataProcessor } from "./concrete/ُExcelProcessor.js";
import { CsvDataProcessor } from "./concrete/csvProcessor.js";

const app = express();

const PORT = 3000;

app.get("/export/excel", async (req, res) => {
  const excelProcessor = new ExcelDataProcessor();
  const success = await excelProcessor.processRequest("/uploads/file.xlxs");
  res.send(success);
});

app.get("/export/csv", async (req, res) => {
  const csvProcessor = new CsvDataProcessor();
  const success = await csvProcessor.processRequest("/uploads/file.csv");
  res.send(success);
});

app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
