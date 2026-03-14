import type { Observer } from "../interfaces/observer.js";
import type { Product } from "../interfaces/product.js";
import type { Subject } from "../interfaces/subject.js";

// Subject
export class ProductService implements Subject<any> {
  private observers: Observer<any>[] = [];
  registerObserver(observer: Observer<any>): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer<any>): void {
    this.observers = this.observers.filter((ob) => ob !== observer);
  }
  async notifyObservers(data: any) {
    for (let ob of this.observers) {
      ob.update(data);
    }
  }

  async updatePrice(id: number, newPrice: number) {
    console.log("Saving To DB....");
    const updatedProduct: any = {
      id: id,
      price: newPrice,
      name: "updated product",
      sku: "prod-sku",
    };
    await this.notifyObservers(updatedProduct);
  }
}
