import { DataProcessor } from "./dataProcessor.js";

export class ExcelDataProcessor extends DataProcessor {
  protected async parseFile(path: string): Promise<any[]> {
    console.log("Opening file stream and parsing CSV data...");
    return [
      { id: 1, type: "Excel" },
      { id: 2, type: "Excel" },
    ];
  }
  protected validateData(data: any[]): boolean {
    console.log("Validating Excel cells for missing formulas...");
    return true;
  }

  // Overriding the Hook! Excel users don't want emails.
  protected customerWantsNotification(): boolean {
    return false;
  }
}
