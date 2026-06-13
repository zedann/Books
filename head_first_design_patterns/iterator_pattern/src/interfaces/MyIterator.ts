/**
 * iterator interface
 */
export interface MyIterator<T> {
  /**
   * @returns if there is still items exists in the iterable
   */
  hasNext(): boolean;
  /**
   * @returns the next item and move forward
   */
  next(): T;
}
