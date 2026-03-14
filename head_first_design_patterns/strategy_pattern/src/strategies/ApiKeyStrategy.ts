import type { Request } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";

export class ApiKeyStrategy implements AuthStrategy {
  authenticate(req: Request): boolean {
    const apiKey = "our-api-key-from-apiKey-service";
    const userApiKey = req.headers["x-api-key"];
    if (!userApiKey) return false;
    return apiKey === userApiKey;
  }
}
