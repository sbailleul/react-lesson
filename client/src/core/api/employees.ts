import { EmployeePosition } from "@/features/office/shared";

export type IdentifiedEmployee = Employee & {
  id: string;
};

export type Employee = {
  firstName: string;
  lastName: string;
  img: string;
  position: EmployeePosition;
};
type Employees = {
  employees: IdentifiedEmployee[];
};
export const getEmployees = async () => {
  const response = await fetch(`${import.meta.env.VITE_API}/employees`);
  const json: Employees = await response.json();
  return json.employees;
};
