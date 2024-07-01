import {
  EmployeeData,
  createEmployee,
  deleteEmployee,
  getEmployees,
} from "@/core/api/employees";
import { EmployeeForm } from "@/features/office/EmployeeForm";
import {
  employeesActions,
  employeesReducer,
  initialEmployeesState,
} from "@/features/office/employees.reducer";
import { useEffect, useReducer } from "react";
import { Employee } from "./Employee";
import { ColorPickerWrapper } from "@/core/theme/ColorPickerWrapper";

export function Employees() {
  // Etat local du composant, conserver entre chaque rendus
  const [state, dispatch] = useReducer(employeesReducer, initialEmployeesState);
  useEffect(() => {
    dispatch(employeesActions.getEmployeesRequested());
    getEmployees()
      .then((employees) =>
        dispatch(employeesActions.getEmployeesSucceeded(employees))
      )
      .catch(() => dispatch(employeesActions.getEmployeesFailed()));
  }, []);

  const hireEmployee = (employee: EmployeeData) => {
    dispatch(employeesActions.hireEmployeeRequested());
    createEmployee(employee)
      .then((createdEmployee) =>
        dispatch(employeesActions.hireEmployeeSucceeded(createdEmployee))
      )
      .catch(() => dispatch(employeesActions.hireEmployeeFailed()));
  };
  const dismissEmployee = (id: string) => {
    dispatch(employeesActions.dismissEmployeeRequested());
    deleteEmployee(id)
      .then(() => dispatch(employeesActions.dismissEmployeeSucceeded(id)))
      .catch(() => dispatch(employeesActions.dismissEmployeeFailed()));
  };
  return (
    <>
      <ColorPickerWrapper />
      <div className="d-flex flex-wrap">
        <div className="row overflow-x-auto flex-nowrap">
          {state.employees.map((e) => (
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
        <EmployeeForm
          onCreate={hireEmployee}
          createStatus={state.statuses.hireEmployee}
        />
      </div>
    </>
  );
}
