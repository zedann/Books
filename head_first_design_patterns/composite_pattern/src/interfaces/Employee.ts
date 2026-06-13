import type { MyIterator } from "./MyIterator.js";
import { NullIterator } from "./NullIterator.js";
import { OrganizationComponent } from "./OrganizationComponent.js";

export class Employee extends OrganizationComponent {
  constructor(private name: string, private salary: number) {
    super();
  }
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public createIterator(): MyIterator<OrganizationComponent> {
    return new NullIterator();
  }
}
