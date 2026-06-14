import type { OrderState } from "../interfaces/orderState.js";
import type { OrderContext } from "./orderContext.js";

export class PendingState implements OrderState {
  public constructor(private orderCtx: OrderContext) {}
  payOrder(): void {
    console.log(`Payment Successfuly.`);
    this.orderCtx.setState(this.orderCtx.paidState);
  }
  cancelOrder(): void {
    console.log("Order Cancelled.");
    this.orderCtx.setState(this.orderCtx.cancelledState);
  }
  shipOrder(): void {
    throw new Error("Can not Ship Unpaid Order");
  }
}
