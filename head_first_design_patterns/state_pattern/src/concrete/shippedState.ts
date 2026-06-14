import type { OrderState } from "../interfaces/orderState.js";
import type { OrderContext } from "./orderContext.js";

export class ShippedState implements OrderState {
  public constructor(private orderCtx: OrderContext) {}
  payOrder(): void {
    throw new Error("Already paid and shipped.");
  }
  cancelOrder(): void {
    throw new Error("Too late! Can't cancel after shipping.");
  }
  shipOrder(): void {
    throw new Error("Already shipped.");
  }
}
