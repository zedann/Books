import type { OrderState } from "../interfaces/orderState.js";
import type { OrderContext } from "./orderContext.js";

export class PaidState implements OrderState {
  public constructor(private orderCtx: OrderContext) {}
  payOrder(): void {
    throw new Error("Order Already Paid.");
  }
  cancelOrder(): void {
    console.log(`Order Cancelled , Refunding...`);
    this.orderCtx.setState(this.orderCtx.cancelledState);
  }
  shipOrder(): void {
    console.log("🚚 Order handed off to shipping carrier.");
    this.orderCtx.setState(this.orderCtx.shippedState);
  }
}
