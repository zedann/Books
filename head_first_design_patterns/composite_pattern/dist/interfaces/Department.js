import { ArrayIterator } from "../concrete/ArrayIterator.js";
import { OrganizationComponent } from "./OrganizationComponent.js";
export class Department extends OrganizationComponent {
    name;
    components = [];
    constructor(name) {
        super();
        this.name = name;
    }
    add(component) {
        this.components.push(component);
    }
    getName() {
        return this.name;
    }
    // The Composite delegates calculating values to all its children recursively
    getSalary() {
        const iterator = this.createIterator();
        let departSalary = 0;
        while (iterator.hasNext()) {
            departSalary += iterator.next().getSalary();
        }
        return departSalary;
    }
    createIterator() {
        return new ArrayIterator(this.components);
    }
}
//# sourceMappingURL=Department.js.map