export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connection: any;
  
  private constructor() {
    this.connection = "Connected to DB";
  }

  public static getInstance(): DatabaseConnection {
    if (!this.instance) this.instance = new DatabaseConnection();
    return this.instance;
  }

  public query(sql: string) {
    return `${this.connection} Executing ${sql}`;
  }
}
