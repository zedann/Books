import type { MyIterator } from "./MyIterator.js";
import type { OrganizationComponent } from "./OrganizationComponent.js";

export class NullIterator implements MyIterator<OrganizationComponent> {
  hasNext(): boolean {
    return false;
  }
  next(): OrganizationComponent {
    throw new Error("No Elements");
  }
}
