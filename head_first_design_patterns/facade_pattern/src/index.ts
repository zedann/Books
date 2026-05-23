import express from "express";
import { OrderFacade } from "./concrete/orderFacade.js";

const app = express();

const PORT = 3000;
const orderFacade = new OrderFacade();
app.post("/checkout", (req, res) => {
  const success = orderFacade.placeOrder("item-123", 400);
  success
    ? res.status(201).send({
        success: true,
        message: "order placed",
      })
    : res.status(400).send({ success: false, message: "Item Out Of Stock" });
});

app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
