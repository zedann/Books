export class Inventory {
  checkStock(itemId: string): boolean {
    return true;
  }

  deductStock(itemId: string): void {
    console.log(`[Inventory Updated]`);
  }
}
