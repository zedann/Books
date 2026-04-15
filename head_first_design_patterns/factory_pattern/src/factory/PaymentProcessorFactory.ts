import { PayPalPaymentProcessor } from "../concrete/PayPalPaymentProcessor.js";
import { StripePaymentProcessor } from "../concrete/StripePaymentProcessor.js";
import type { PaymentProcessor } from "../interfaces/PaymentProcessor.js";

export class PaymentProcessorFactory {
  static createProcessor(type: string): PaymentProcessor {
    switch (type) {
      case "stripe":
        return new StripePaymentProcessor();
      case "paypal":
        return new PayPalPaymentProcessor();
      default:
        throw new Error("Invalid Payment Processor Type");
    }
  }
}
