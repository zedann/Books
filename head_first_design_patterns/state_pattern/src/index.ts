import express from "express";
import { OrderContext } from "./concrete/orderContext.js";
const app = express();

const PORT = 3000;

const userOrder = new OrderContext();
app.post("/order/pay", (req, res) => {
  userOrder.payOrder();
  res.status(200).send({ message: "Action Processed" });
});
// same for others
app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
