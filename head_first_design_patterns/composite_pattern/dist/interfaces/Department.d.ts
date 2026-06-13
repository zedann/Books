import type { MyIterator } from "./MyIterator.js";
import { OrganizationComponent } from "./OrganizationComponent.js";
export declare class Department extends OrganizationComponent {
    private name;
    private components;
    constructor(name: string);
    add(component: OrganizationComponent): void;
    getName(): string;
    getSalary(): number;
    createIterator(): MyIterator<OrganizationComponent>;
}
//# sourceMappingURL=Department.d.ts.map