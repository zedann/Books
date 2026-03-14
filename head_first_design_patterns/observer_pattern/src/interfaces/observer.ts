export interface Observer<T> {
  update(data: T): Promise<void> | void;
}
