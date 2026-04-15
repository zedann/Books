import express from "express";
import { AuthGuard } from "./Guards/AuthGuard.js";
import { ApiKeyStrategy } from "./strategies/ApiKeyStrategy.js";
import { JwtStrategy } from "./strategies/JwtStrategy.js";
const app = express();
const PORT = 3000;
// better use di container [self pref]
const authGuard = new AuthGuard();
app.get("/public-api", authGuard.validate(new ApiKeyStrategy()), (req, res) => {
    res.status(200).send("accessable by api key");
});
app.get("/private", authGuard.validate(new JwtStrategy()), (req, res) => {
    res.status(200).send("accessable by jwt");
});
app.listen(PORT, () => {
    console.log("App Listen On Port On ", PORT);
});
//# sourceMappingURL=index.js.map