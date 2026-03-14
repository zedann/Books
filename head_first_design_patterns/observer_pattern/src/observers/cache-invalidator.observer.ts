import type { Observer } from "../interfaces/observer.js";
import type { Product } from "../interfaces/product.js";

export class CacheInvalidator implements Observer<Product> {
  update(data: Product): Promise<void> | void {
    console.log("Validate Redis Cache for product with id ", data.id);
  }
}
