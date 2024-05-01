import { EmployeePosition } from "@/features/office/shared";

export type IdentifiedEmployeeData = EmployeeData & {
  id: string;
};

export type EmployeeData = {
  firstName: string;
  lastName: string;
  img: string;
  position: EmployeePosition;
};
type Employees = {
  employees: IdentifiedEmployeeData[];
};
export const getEmployees = async () => {
  const response = await fetch(`${import.meta.env.VITE_API}/employees`);
  const json: Employees = await response.json();
  return json.employees;
};
export const deleteEmployee = async (id: string) => {
  return fetch(`${import.meta.env.VITE_API}/employees/${id}`, {
    method: "DELETE",
  });
};
export const createEmployee = async (
  employee: EmployeeData
): Promise<IdentifiedEmployeeData> => {
  const response = await fetch(`${import.meta.env.VITE_API}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  return response.json();
};
