import { AuditLogger } from "../observers/audit-logger.observer.js";
import { CacheInvalidator } from "../observers/cache-invalidator.observer.js";
import type { ProductService } from "../services/product.service.js";

export const initObserversTo = (productService: ProductService) => {
  productService.registerObserver(new AuditLogger());
  productService.registerObserver(new CacheInvalidator());

  console.log("Observer Has Been Registered To Product Service");
};
