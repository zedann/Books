import express from "express";
import { Department } from "./interfaces/Department.js";
import { Employee } from "./interfaces/Employee.js";
const app = express();
const PORT = 3000;
const engineeringDept = new Department("Engineering");
engineeringDept.add(new Employee("Alice", 150000));
engineeringDept.add(new Employee("Bob", 100000));
const qaDept = new Department("Quality Assurance");
qaDept.add(new Employee("Charlie", 80000));
engineeringDept.add(qaDept);
const companyTree = new Department("Global Tech Inc");
companyTree.add(engineeringDept);
companyTree.add(new Employee("CEO", 300000));
app.get("/budget", (req, res) => {
    const totalBudget = companyTree.getSalary();
    const structureName = companyTree.getName();
    res.status(200).send({
        organization: structureName,
        totalBudget: `$${totalBudget}`, // Automatically aggregates everything recursively
    });
});
app.listen(PORT, () => {
    console.log("App Listen On Port On ", PORT);
});
//# sourceMappingURL=index.js.map