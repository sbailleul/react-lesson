// Représente les différents postes des employés du bureau
export const EMPLOYEE_POSITIONS = [
  "RegionalManager",
  "AssistantToTheRegionalManager",
  "Receptionist",
  "SaleRepresentative",
] as const;
export type EmployeePosition = (typeof EMPLOYEE_POSITIONS)[number];

export type Employee = {
  firstName: string;
  lastName: string;
  img: string;
  position: EmployeePosition;
};

export function getPositionDescription(position: EmployeePosition) {
  switch (position) {
    case "RegionalManager":
      return "Spends his time: 80% distracting others; 19% procrastination; and 1% critical thinking";
    case "AssistantToTheRegionalManager":
      return "Attempting to elevate himself to second-in-command to branch manager";
  }
}
export function isMemberOfManagement(position: EmployeePosition) {
  return (
    position === "RegionalManager" ||
    position === "AssistantToTheRegionalManager"
  );
}

export function toFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}
// Intersection du type EmployeeProps utilisé pour rendre un composant Employee avec le type {id: string} permettant d'identifier un employé avec un id unique

export type IdentifiedEmployee = Employee & {
  id: string;
};
