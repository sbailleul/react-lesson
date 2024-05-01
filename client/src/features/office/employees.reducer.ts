import { EmployeeData, IdentifiedEmployeeData } from "@/core/api/employees";
import { PropertiesReturnTypes } from "@/shared/types";

export const employeesActions = {
  hireEmployee: (employee: IdentifiedEmployeeData) => ({
    type: "HIRE_EMPLOYEE" as const,
    employee,
  }),
  dismissEmployee: (id: string) => ({
    type: "DISMISS_EMPLOYEE" as const,
    id,
  }),
  setEmployees: (employees: IdentifiedEmployeeData[]) => ({
    type: "SET_EMPLOYEES" as const,
    employees,
  }),
} as const;
type EmployeesActions = PropertiesReturnTypes<typeof employeesActions>;

export function employeesReducer(
  employees: IdentifiedEmployeeData[],
  action: EmployeesActions
) {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return action.employees;
    case "DISMISS_EMPLOYEE":
      return employees.filter((employee) => employee.id !== action.id);
    case "HIRE_EMPLOYEE":
      return [...employees, action.employee];
  }
}
