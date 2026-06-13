import { NullIterator } from "./NullIterator.js";
import { OrganizationComponent } from "./OrganizationComponent.js";
export class Employee extends OrganizationComponent {
    name;
    salary;
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    createIterator() {
        return new NullIterator();
    }
}
//# sourceMappingURL=Employee.js.map