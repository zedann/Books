import type { MyIterator } from "./MyIterator.js";
import { OrganizationComponent } from "./OrganizationComponent.js";
export declare class Employee extends OrganizationComponent {
    private name;
    private salary;
    constructor(name: string, salary: number);
    getName(): string;
    getSalary(): number;
    createIterator(): MyIterator<OrganizationComponent>;
}
//# sourceMappingURL=Employee.d.ts.map