import type { Observer } from "../interfaces/observer.js";
import type { Product } from "../interfaces/product.js";

export class AuditLogger implements Observer<Product> {
  update(data: Product): Promise<void> | void {
    console.log("Audit Logging ", data.name);
  }
}
