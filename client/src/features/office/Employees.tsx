import {
  EmployeeData,
  createEmployee,
  deleteEmployee,
  getEmployees,
} from "@/core/api/employees";
import { EmployeeForm } from "@/features/office/EmployeeForm";
import { employeesReducer } from "@/features/office/employees.reducer";
import { useEffect, useReducer } from "react";
import { Employee } from "./Employee";

export function Employees() {
  // Etat local du composant, conserver entre chaque rendus
  const [employees, dispatch] = useReducer(employeesReducer, []);
  useEffect(() => {
    getEmployees().then((employees) =>
      dispatch({ type: "SET_EMPLOYEES", employees })
    );
  }, []);
  const hireEmployee = (employee: EmployeeData) => {
    createEmployee(employee).then((createdEmployee) =>
      dispatch({ type: "HIRE_EMPLOYEE", employee: createdEmployee })
    );
  };
  const dismissEmployee = (id: string) => {
    deleteEmployee(id).then(() => dispatch({ type: "DISMISS_EMPLOYEE", id }));
  };
  return (
    <>
      <div className="row overflow-x-auto flex-nowrap">
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
            onDismiss={() => dismissEmployee(e.id)}
          />
        ))}
      </div>
      <EmployeeForm onCreate={hireEmployee} />
    </>
  );
}
