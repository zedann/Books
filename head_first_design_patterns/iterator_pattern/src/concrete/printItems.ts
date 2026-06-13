import type { MyIterator } from "../interfaces/MyIterator.js";

export function printItems(iterator: MyIterator<string>) {
  while (iterator.hasNext()) {
    console.log(iterator.next())
  }
}
