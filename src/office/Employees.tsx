import { Employee, EmployeeProps } from "@/office/Employee";
import { EmployeeForm } from "@/office/EmployeeForm";
import { useState } from "react";

// Intersection du type EmployeeProps utilisé pour rendre un composant Employee avec le type {id: string} permettant d'identifier un employé avec un id unique
export type IdentifiedEmployee = Omit<EmployeeProps, "onDismiss"> & {
  id: string;
};

export type EmployeesProps = { employees: IdentifiedEmployee[] };

export function Employees(props: EmployeesProps) {
  // Etat local du composant, conserver entre chaque rendus
  const [employees, setEmployees] = useState(props.employees);
  return (
    <div className="d-flex w-100">
      {employees.map((e) => (
        // Si on ne fournit pas de valeur à l'attribut key React va logger ce message dans la console : Warning: Each child in a list should have a unique "key" prop.
        // En effet React optimise les rendus des éléments dans un tableau, il ne rend que les éléments ayant changé,
        // pour ce faire il a besoin d'identifier quel élément est différent via l'attribut key.
        // Dans notre cas si l'id d'un employé change on peut estimer que ce n'est plus le même employé
        // <Employee  firstName={e.firstName} lastName={e.lastName} img={e.img} position={e.position}  />

        <Employee
          key={e.id}
          firstName={e.firstName}
          lastName={e.lastName}
          img={e.img}
          position={e.position}
          // On recréer la liste des employées en excluant l'employé licencié
          onDismiss={() =>
            setEmployees(employees.filter((employee) => employee.id !== e.id))
          }
        />
      ))}
      <EmployeeForm
        onCreate={(employee) =>
          // Rajoute un employé en créant un nouveau tableau et en ajoutant le nouvel employé à la fin
          setEmployees([
            ...employees,
            { ...employee, id: `uniq_${employees.length}` },
          ])
        }
      />
    </div>
  );
}
