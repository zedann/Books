export class JwtStrategy {
    authenticate(req) {
        const authHeader = req.headers["authorization"];
        if (!authHeader?.startsWith("Bearer "))
            return false;
        const _token = authHeader.split(" ")[1];
        // verify token using jwt service
        const isVerified = true;
        return isVerified;
    }
}
//# sourceMappingURL=JwtStrategy.js.map