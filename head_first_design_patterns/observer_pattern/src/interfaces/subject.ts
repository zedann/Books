import type { Observer } from "./observer.js";

export interface Subject<T> {
  registerObserver(observer: Observer<T>): void;
  removeObserver(observer: Observer<T>): void;
  notifyObservers(data: T): Promise<void> | void;
}
