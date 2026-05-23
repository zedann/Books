import { DataProcessor } from "./dataProcessor.js";

export class CsvDataProcessor extends DataProcessor {
  protected async parseFile(path: string): Promise<any[]> {
    console.log("Opening file stream and parsing CSV data...");
    return [
      { id: 1, type: "CSV" },
      { id: 2, type: "CSV" },
    ];
  }
  protected validateData(data: any[]): boolean {
    console.log("Validating CSV row structures...");
    return data.length > 0;
  }
}
