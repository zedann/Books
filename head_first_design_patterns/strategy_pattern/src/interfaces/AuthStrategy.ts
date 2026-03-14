import type { Request } from "express";

export interface AuthStrategy {
  authenticate(req: Request): boolean;
}
