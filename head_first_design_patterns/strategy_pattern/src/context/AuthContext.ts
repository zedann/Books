import type { Request } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";

export class AuthContext {
  private authStrategy: AuthStrategy;

  public constructor(strategy: AuthStrategy) {
    this.authStrategy = strategy;
  }

  public setStrategy(strategy: AuthStrategy) {
    this.authStrategy = strategy;
  }

  public execute(req: Request): boolean {
    return this.authStrategy.authenticate(req);
  }
}
