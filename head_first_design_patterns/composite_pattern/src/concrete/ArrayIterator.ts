import type { MyIterator } from "../interfaces/MyIterator.js";

export class ArrayIterator<T> implements MyIterator<T> {
  private readonly items: T[];
  private position: number = 0;

  public constructor(items: T[]) {
    this.items = items;
  }

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): T {
    if (this.position >= this.items.length) throw new Error("No Items");
    return this.items[this.position++]!;
  }
}
