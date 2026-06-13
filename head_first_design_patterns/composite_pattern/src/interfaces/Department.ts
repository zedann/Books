import { ArrayIterator } from "../concrete/ArrayIterator.js";
import type { MyIterator } from "./MyIterator.js";
import { OrganizationComponent } from "./OrganizationComponent.js";

export class Department extends OrganizationComponent {
  private components: OrganizationComponent[] = [];
  constructor(private name: string) {
    super();
  }
  public add(component: OrganizationComponent): void {
    this.components.push(component);
  }
  public getName(): string {
    return this.name;
  }
  // The Composite delegates calculating values to all its children recursively
  public getSalary(): number {
    const iterator = this.createIterator();
    let departSalary = 0;
    while (iterator.hasNext()) {
      departSalary += iterator.next().getSalary();
    }
    return departSalary;
  }
  public createIterator(): MyIterator<OrganizationComponent> {
    return new ArrayIterator(this.components);
  }
}
