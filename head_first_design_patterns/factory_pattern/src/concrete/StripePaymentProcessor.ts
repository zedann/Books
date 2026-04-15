import type { PaymentProcessor } from "../interfaces/PaymentProcessor.js";

export class StripePaymentProcessor implements PaymentProcessor {
  async processPayment(amount: number): Promise<void> {
    console.log(`Processing Payment with amount of ${amount} Via Strip...`);
  }
}
