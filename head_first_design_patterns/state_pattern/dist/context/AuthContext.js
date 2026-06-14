export class AuthContext {
    authStrategy;
    constructor(strategy) {
        this.authStrategy = strategy;
    }
    setStrategy(strategy) {
        this.authStrategy = strategy;
    }
    execute(req) {
        return this.authStrategy.authenticate(req);
    }
}
//# sourceMappingURL=AuthContext.js.map