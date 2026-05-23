import type { Request } from "express";
import type { AuthStrategy } from "../interfaces/AuthStrategy.js";
export declare class JwtStrategy implements AuthStrategy {
    authenticate(req: Request): boolean;
}
//# sourceMappingURL=JwtStrategy.d.ts.map