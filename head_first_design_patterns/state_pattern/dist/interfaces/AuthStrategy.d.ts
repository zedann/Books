import type { Request } from "express";
export interface AuthStrategy {
    authenticate(req: Request): boolean;
}
//# sourceMappingURL=AuthStrategy.d.ts.map