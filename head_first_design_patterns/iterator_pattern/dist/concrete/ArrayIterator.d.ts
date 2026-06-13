import type { MyIterator } from "../interfaces/MyIterator.js";
export declare class ArrayIterator<T> implements MyIterator<T> {
    private readonly items;
    private position;
    constructor(items: T[]);
    hasNext(): boolean;
    next(): T;
}
//# sourceMappingURL=ArrayIterator.d.ts.map