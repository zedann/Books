import type { NextFunction, Request, Response } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";
import { AuthContext } from "../context/AuthContext.js";

export class AuthGuard {
  public validate(strategy: AuthStrategy) {
    return function (req: Request, res: Response, next: NextFunction) {
      const authContext = new AuthContext(strategy);

      if (authContext.execute(req)) {
        next();
      } else {
        res.status(401).send("unauthorized");
      }
    };
  }
}
