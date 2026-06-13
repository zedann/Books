export class ArrayIterator {
    items;
    position = 0;
    constructor(items) {
        this.items = items;
    }
    hasNext() {
        return this.position < this.items.length;
    }
    next() {
        if (this.position >= this.items.length)
            throw new Error("No Items");
        return this.items[this.position++];
    }
}
//# sourceMappingURL=ArrayIterator.js.map