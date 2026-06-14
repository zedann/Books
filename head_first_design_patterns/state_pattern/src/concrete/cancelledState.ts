import type { OrderState } from "../interfaces/orderState.js";
import type { OrderContext } from "./orderContext.js";

export class CancelledState implements OrderState {
  public constructor(private orderCtx: OrderContext) {}
  payOrder(): void {
    throw new Error("Cannot pay for a cancelled order");
  }
  cancelOrder(): void {
    throw new Error("Already cancelled");
  }
  shipOrder(): void {
    throw new Error("Cannot ship a cancelled order");
  }
}
