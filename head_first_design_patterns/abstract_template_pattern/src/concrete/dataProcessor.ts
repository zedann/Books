export abstract class DataProcessor {
  public async processRequest(filePath: string): Promise<boolean> {
    this.authenticate();
    const rawData = await this.parseFile(filePath);
    const isValid = this.validateData(rawData);
    if (isValid) {
      this.saveToDatabase(rawData);

      // HOOK
      if (this.customerWantsNotification()) this.sendConfirmation();
      return true;
    }

    return false;
  }
  private authenticate(): void {
    console.log(`Request authenticated securely.`);
  }
  protected abstract parseFile(path: string): Promise<any[]>;
  protected abstract validateData(data: any[]): boolean;
  private saveToDatabase(data: any[]): void {
    console.log(`Successfully saved ${data.length} records to the Database.`);
  }
  protected customerWantsNotification(): boolean {
    return true; // default implementation
  }
  private sendConfirmation(): void {
    console.log(`Confirmation Email dispatch to the admin.`);
  }
}
