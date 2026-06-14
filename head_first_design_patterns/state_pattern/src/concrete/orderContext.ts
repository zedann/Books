import { stat } from "node:fs";
import type { OrderState } from "../interfaces/orderState.js";
import { PendingState } from "./pendingState.js";
import { PaidState } from "./paidState.js";
import { ShippedState } from "./shippedState.js";
import { CancelledState } from "./cancelledState.js";

export class OrderContext {
  // define all status

  public pendingState: OrderState;
  public paidState: OrderState;
  public shippedState: OrderState;
  public cancelledState: OrderState;

  private currentState: OrderState;

  public constructor() {
    this.pendingState = new PendingState(this);
    this.paidState = new PaidState(this);
    this.shippedState = new ShippedState(this);
    this.cancelledState = new CancelledState(this);
    this.currentState = this.pendingState;
  }
  public setState(state: OrderState): void {
    this.currentState = state;
  }

  // context delegate behavior to state current state object

  public payOrder(): void {
    this.currentState.payOrder();
  }

  public cancelOrder(): void {
    this.currentState.cancelOrder();
  }

  public shipOrder(): void {
    this.currentState.shipOrder();
  }
}
