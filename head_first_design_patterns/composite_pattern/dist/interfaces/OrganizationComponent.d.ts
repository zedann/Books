import type { MyIterator } from "./MyIterator.js";
export declare abstract class OrganizationComponent {
    add(component: OrganizationComponent): void;
    remove(): void;
    abstract getName(): string;
    abstract getSalary(): number;
    abstract createIterator(): MyIterator<OrganizationComponent>;
}
//# sourceMappingURL=OrganizationComponent.d.ts.map