import type { NextFunction, Request, Response } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";
export declare class AuthGuard {
    validate(strategy: AuthStrategy): (req: Request, res: Response, next: NextFunction) => void;
}
//# sourceMappingURL=AuthGuard.d.ts.map