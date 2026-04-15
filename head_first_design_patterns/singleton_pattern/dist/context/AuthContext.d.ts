import type { Request } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";
export declare class AuthContext {
    private authStrategy;
    constructor(strategy: AuthStrategy);
    setStrategy(strategy: AuthStrategy): void;
    execute(req: Request): boolean;
}
//# sourceMappingURL=AuthContext.d.ts.map