import { Employee, IdentifiedEmployee } from "@/core/api/employees";
import { PropertiesReturnTypes } from "@/shared/types";

export const employeesActions = {
  hireEmployee: (employee: Employee) => ({
    type: "HIRE_EMPLOYEE" as const,
    employee,
  }),
  dismissEmployee: (employee: IdentifiedEmployee) => ({
    type: "DISMISS_EMPLOYEE" as const,
    employee,
  }),
  setEmployees: (employees: IdentifiedEmployee[]) => ({
    type: "SET_EMPLOYEES" as const,
    employees,
  }),
} as const;
type EmployeesActions = PropertiesReturnTypes<typeof employeesActions>;

export function employeesReducer(
  employees: IdentifiedEmployee[],
  action: EmployeesActions
) {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return employees;
    case "DISMISS_EMPLOYEE":
      return employees.filter((employee) => employee.id !== action.employee.id);
    case "HIRE_EMPLOYEE":
      return [
        ...employees,
        { ...action.employee, id: `uniq_${employees.length + 1}` },
      ];
  }
}
