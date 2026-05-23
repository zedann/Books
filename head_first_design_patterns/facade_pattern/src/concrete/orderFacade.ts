import { Inventory } from "./Inventory.js";
import { PaymentProcessor } from "./PaymentProcessor.js";
import { ShippingService } from "./ShipingService.js";

export class OrderFacade {
  private readonly inventory = new Inventory();
  private readonly payment = new PaymentProcessor();
  private readonly shipping = new ShippingService();
  public placeOrder(itemId: string, price: number): boolean {
    console.log(`---Starting Order Process---`);
    if (!this.inventory.checkStock(itemId)) return false;

    this.payment.charge(price);
    this.inventory.deductStock(itemId);
    this.shipping.createLabel(itemId);

    console.log("--- Order Process Completed Successfully ---");
    return true;
  }
}
