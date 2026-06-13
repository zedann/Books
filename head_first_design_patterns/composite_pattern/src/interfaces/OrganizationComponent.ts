import type { MyIterator } from "./MyIterator.js";

export abstract class OrganizationComponent {
  // shared structural operations
  public add(component: OrganizationComponent): void {
    throw new Error("Operation Not Supported");
  }
  public remove(): void {
    throw new Error("Operation Not Supported");
  }

  // common business logic operations
  public abstract getName(): string;
  public abstract getSalary(): number;

  // The Bridge to Iterator Pattern
  public abstract createIterator():MyIterator<OrganizationComponent>;
}
