import { Employee, IdentifiedEmployee } from "@/features/office/shared";
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
} as const;
type EmployeesActions = PropertiesReturnTypes<typeof employeesActions>;

export function employeesReducer(
  employees: IdentifiedEmployee[],
  action: EmployeesActions
) {
  switch (action.type) {
    case "DISMISS_EMPLOYEE":
      return employees.filter((employee) => employee.id !== action.employee.id);
    case "HIRE_EMPLOYEE":
      return [
        ...employees,
        { ...action.employee, id: `uniq_${employees.length + 1}` },
      ];
  }
}
