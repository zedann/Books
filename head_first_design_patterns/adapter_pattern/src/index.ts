import express from "express";
import { SmsAdapter } from "./concrete/SmsAdapter.js";
import type { NotificationService } from "./interfaces/NotificationService.js";
import { LegacySmsApi } from "./concrete/LegacySmsApi.js";

const app = express();

const PORT = 3000;
const legacySms: LegacySmsApi = new LegacySmsApi();

const notifier: NotificationService = new SmsAdapter(legacySms);

app.get("/notify", async (req, res) => {
  const user = req.body;
  await notifier.send(user.id, "Your Package Arrived");
  res.send({ success: true });
});

app.listen(PORT, () => {
  console.log("App Listen On Port On ", PORT);
});
