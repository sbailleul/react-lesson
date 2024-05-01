import { Employee, EmployeesService, IdentifiedEmployee } from './employees.service';
export declare class EmployeesController {
    private readonly appService;
    constructor(appService: EmployeesService);
    registerEmployees(employee: Employee): void;
    listEmployees(): Promise<import("./employees.service").IdentifiedEmployees>;
    updateEmployee(employee: IdentifiedEmployee): Promise<void>;
    deleteEmployee(id: string): Promise<void>;
}
