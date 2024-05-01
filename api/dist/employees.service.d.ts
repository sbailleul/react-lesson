export declare class Employee {
    firstName: string;
    lastName: string;
    img: string;
    position: string;
}
export declare class IdentifiedEmployee {
    id: string;
    firstName: string;
    lastName: string;
    img: string;
    position: string;
}
export declare class IdentifiedEmployees {
    employees: IdentifiedEmployee[];
}
export declare class EmployeesService {
    registerEmployee(employee: Employee): Promise<void>;
    listEmployees(): Promise<IdentifiedEmployees>;
    deleteEmployee(id: string): Promise<void>;
    updateEmployee(employee: IdentifiedEmployee): Promise<void>;
    private writeEmployees;
    private readEmployees;
}
