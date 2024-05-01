import { EmployeeData, IdentifiedEmployeeData } from "@/core/api/employees";
import { RequestStatus } from "@/shared/requests";
import { PropertiesReturnTypes } from "@/shared/types";
type Statuses = {
  dismissEmployee: RequestStatus;
  getEmployees: RequestStatus;
  hireEmployee: RequestStatus;
};
export type State = {
  employees: IdentifiedEmployeeData[];
  statuses: Statuses;
};

export const employeesActions = {
  hireEmployeeRequested: () => ({
    type: "HIRE_EMPLOYEE_REQUESTED" as const,
  }),
  hireEmployeeSucceeded: (employee: IdentifiedEmployeeData) => ({
    type: "HIRE_EMPLOYEE_SUCCEEDED" as const,
    employee,
  }),
  hireEmployeeFailed: () => ({
    type: "HIRE_EMPLOYEE_FAILED" as const,
  }),
  dismissEmployeeRequested: () => ({
    type: "DISMISS_EMPLOYEE_REQUESTED" as const,
  }),
  dismissEmployeeSucceeded: (id: string) => ({
    type: "DISMISS_EMPLOYEE_SUCCEEDED" as const,
    id,
  }),
  dismissEmployeeFailed: () => ({
    type: "DISMISS_EMPLOYEE_FAILED" as const,
  }),
  getEmployeesRequested: () => ({
    type: "GET_EMPLOYEES_REQUESTED" as const,
  }),
  getEmployeesSucceeded: (employees: IdentifiedEmployeeData[]) => ({
    type: "GET_EMPLOYEES_SUCCEEDED" as const,
    employees,
  }),
  getEmployeesFailed: () => ({
    type: "GET_EMPLOYEES_FAILED" as const,
  }),
} as const;
type EmployeesActions = PropertiesReturnTypes<typeof employeesActions>;

export const initialEmployeesState: State = {
  employees: [],
  statuses: {
    dismissEmployee: "idle",
    getEmployees: "idle",
    hireEmployee: "idle",
  },
};
export function employeesReducer(
  state: State,
  action: EmployeesActions
): State {
  switch (action.type) {
    case "GET_EMPLOYEES_REQUESTED":
      return {
        ...state,
        statuses: { ...state.statuses, getEmployees: "load" },
      };
    case "GET_EMPLOYEES_SUCCEEDED":
      return {
        employees: action.employees,
        statuses: { ...state.statuses, getEmployees: "success" },
      };
    case "GET_EMPLOYEES_FAILED":
      return {
        ...state,
        statuses: { ...state.statuses, getEmployees: "error" },
      };
    case "DISMISS_EMPLOYEE_REQUESTED":
      return {
        ...state,
        statuses: { ...state.statuses, dismissEmployee: "load" },
      };
    case "DISMISS_EMPLOYEE_SUCCEEDED":
      return {
        employees: state.employees.filter((e) => e.id !== action.id),
        statuses: { ...state.statuses, dismissEmployee: "success" },
      };
    case "DISMISS_EMPLOYEE_FAILED":
      return {
        ...state,
        statuses: { ...state.statuses, dismissEmployee: "error" },
      };
    case "HIRE_EMPLOYEE_REQUESTED":
      return {
        ...state,
        statuses: { ...state.statuses, hireEmployee: "load" },
      };
    case "HIRE_EMPLOYEE_SUCCEEDED":
      return {
        employees: [...state.employees, action.employee],
        statuses: { ...state.statuses, hireEmployee: "success" },
      };
    case "HIRE_EMPLOYEE_FAILED":
      return {
        ...state,
        statuses: { ...state.statuses, hireEmployee: "error" },
      };
    default:
      return state;
  }
}
