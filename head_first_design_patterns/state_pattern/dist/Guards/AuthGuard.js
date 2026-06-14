import { AuthContext } from "../context/AuthContext.js";
export class AuthGuard {
    validate(strategy) {
        return function (req, res, next) {
            const authContext = new AuthContext(strategy);
            if (authContext.execute(req)) {
                next();
            }
            else {
                res.status(401).send("unauthorized");
            }
        };
    }
}
//# sourceMappingURL=AuthGuard.js.map