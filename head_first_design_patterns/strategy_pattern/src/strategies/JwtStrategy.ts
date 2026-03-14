import type { Request } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";

export class JwtStrategy implements AuthStrategy {
  authenticate(req: Request): boolean {
    const authHeader = req.headers["authorization"];
    if (!authHeader?.startsWith("Bearer")) return false;
    const _token = authHeader.split(" ")[1];
    // verify token using jwt service
    const isVerified = true;

    return isVerified;
  }
}
