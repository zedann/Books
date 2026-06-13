export class NullIterator {
    hasNext() {
        return false;
    }
    next() {
        throw new Error("No Elements");
    }
}
//# sourceMappingURL=NullIterator.js.map