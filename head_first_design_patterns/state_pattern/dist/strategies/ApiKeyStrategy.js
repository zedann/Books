export class ApiKeyStrategy {
    authenticate(req) {
        const apiKey = "our-api-key-from-apiKey-service";
        const userApiKey = req.headers["x-api-key"];
        if (!userApiKey)
            return false;
        return apiKey === userApiKey;
    }
}
//# sourceMappingURL=ApiKeyStrategy.js.map