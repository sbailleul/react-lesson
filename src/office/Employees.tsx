import { Employee, EmployeeProps } from "@/office/Employee";

// Intersection du type EmployeeProps utilisé pour rendre un composant Employee avec le type {id: string} permettant d'identifier un employé avec un id unique
export type IdentifiedEmployee = EmployeeProps & {id: string};

export type EmployeesProps = { employees: IdentifiedEmployee[] };

export function Employees({ employees }: EmployeesProps) {
  return (
    <div className="d-flex">
      {employees.map((e) => (
        // Si on ne fournit pas de valeur à l'attribut key React va logger ce message dans la console : Warning: Each child in a list should have a unique "key" prop.
        // En effet React optimise les rendus des éléments dans un tableau, il ne rend que les éléments ayant changé,
        // pour ce faire il a besoin d'identifier quel élément est différent via l'attribut key. 
        // Dans notre cas si l'id d'un employé change on peut estimer que ce n'est plus le même employé 
        // <Employee  firstName={e.firstName} lastName={e.lastName} img={e.img} position={e.position}  />

        <Employee  key={e.id} firstName={e.firstName} lastName={e.lastName} img={e.img} position={e.position}  />
      ))}
    </div>
  );
}
