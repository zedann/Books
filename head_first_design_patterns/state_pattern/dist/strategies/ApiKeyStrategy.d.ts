import type { Request } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";
export declare class ApiKeyStrategy implements AuthStrategy {
    authenticate(req: Request): boolean;
}
//# sourceMappingURL=ApiKeyStrategy.d.ts.map