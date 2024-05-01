"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = exports.IdentifiedEmployees = exports.IdentifiedEmployee = exports.Employee = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const uuid_1 = require("uuid");
class Employee {
}
exports.Employee = Employee;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Employee.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Employee.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Employee.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Employee.prototype, "position", void 0);
class IdentifiedEmployee {
}
exports.IdentifiedEmployee = IdentifiedEmployee;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IdentifiedEmployee.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IdentifiedEmployee.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IdentifiedEmployee.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IdentifiedEmployee.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IdentifiedEmployee.prototype, "position", void 0);
class IdentifiedEmployees {
}
exports.IdentifiedEmployees = IdentifiedEmployees;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IdentifiedEmployees.prototype, "employees", void 0);
const EMPLOYEES_FILE_NAME = (0, path_1.join)(__dirname, './assets/employees.json');
let EmployeesService = class EmployeesService {
    async registerEmployee(employee) {
        const employees = await this.readEmployees();
        const id = (0, uuid_1.v4)();
        this.writeEmployees({ ...employees, [id]: employee });
    }
    async listEmployees() {
        const txt = await (0, promises_1.readFile)(EMPLOYEES_FILE_NAME, 'utf-8');
        const employees = JSON.parse(txt);
        return {
            employees: Object.entries(employees).map(([id, employee]) => ({
                ...employee,
                id,
            })),
        };
    }
    async deleteEmployee(id) {
        const employees = await this.readEmployees();
        const employeesWithoutId = Object.fromEntries(Object.entries(employees).filter(([k]) => k !== id));
        this.writeEmployees(employeesWithoutId);
    }
    async updateEmployee(employee) {
        const employees = await this.readEmployees();
        this.writeEmployees({
            ...employees,
            [employee.id]: {
                firstName: employee.firstName,
                img: employee.img,
                lastName: employee.lastName,
                position: employee.position,
            },
        });
    }
    writeEmployees(employees) {
        (0, promises_1.writeFile)(EMPLOYEES_FILE_NAME, JSON.stringify(employees));
    }
    async readEmployees() {
        const txt = await (0, promises_1.readFile)(EMPLOYEES_FILE_NAME, 'utf-8');
        return JSON.parse(txt);
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)()
], EmployeesService);
//# sourceMappingURL=employees.service.js.map