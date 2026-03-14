import express from "express";
import { ProductService } from "./services/product.service.js";
import { initObserversTo } from "./loaders/observer.loader.js";
const app = express();

const PORT = 3000;

const productService = new ProductService();
initObserversTo(productService);
app.get("/updateProduct", async (req, res) => {
  await productService.updatePrice(1, 20);
  res.send("Product updated");
});
app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
