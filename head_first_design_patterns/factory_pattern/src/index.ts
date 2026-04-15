import express, { type Request, type Response } from "express";
import { PaymentProcessorFactory } from "./factory/PaymentProcessorFactory.js";
const app = express();

const PORT = 3000;

app.post("/checkout", async (req, res) => {
  const { provider, amount } = req.body;

  try {
    const processor = PaymentProcessorFactory.createProcessor(provider);

    await processor.processPayment(amount);

    res.status(200).send("Payment Successfuly");
  } catch (err: any) {
    res.status(400).send("Payment Failed");
  }
});

app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
