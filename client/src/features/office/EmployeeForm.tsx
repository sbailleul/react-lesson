import {
  EMPLOYEE_POSITIONS,
  EmployeePosition,
  getPositionDescription,
  toFullName,
} from "@/features/office/shared";
import { EmployeeData } from "@/core/api/employees";
import { RequestStatus } from "@/shared/requests";
import { delay } from "@/shared/time";
import { useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Spinner,
} from "react-bootstrap";

type EmployeeFormProps = {
  onCreate: (employee: EmployeeData) => void;
  createStatus: RequestStatus;
};

// Composant EmployeeForm permet de créer un nouvel employé
export function EmployeeForm({ onCreate, createStatus }: EmployeeFormProps) {
  // Stockage de l'objet de type Partial<Employee>, Partial redéclare le type passé en générique pour rendre toutes ses propriétés optionnelles
  const [employee, setEmployee] = useState<Partial<EmployeeData>>({
    position: "RegionalManager",
  });
  const positionDescription =
    employee.position && getPositionDescription(employee.position);
  // Référence qui permet d’interagir avec le formulaire
  const formRef = useRef<HTMLFormElement>(null);
  // Réinitialise le formulaire et le state
  const handleReset = () => {
    formRef?.current?.reset();
    setEmployee({});
  };

  return (
    <Card className={`w-20`}>
      <CardImg src={employee.img}></CardImg>
      <CardBody className="d-flex flex-column">
        <CardTitle>
          {employee.firstName &&
            employee.lastName &&
            toFullName(employee.firstName, employee.lastName)}
        </CardTitle>
        {positionDescription && <CardText>{positionDescription}</CardText>}
        {createStatus === "load" ? (
          <Spinner />
        ) : (
          <Form ref={formRef} className="d-flex flex-column mt-auto">
            <FormGroup>
              <FormLabel>First name</FormLabel>
              <FormControl
                type="text"
                placeholder="Tony"
                onChange={(e) =>
                  setEmployee({ ...employee, firstName: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Last name</FormLabel>
              <FormControl
                type="text"
                placeholder="Montana"
                onChange={(e) =>
                  setEmployee({ ...employee, lastName: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Img</FormLabel>
              <FormControl
                type="text"
                placeholder="https://images.google.com/"
                onChange={(e) =>
                  setEmployee({ ...employee, img: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Position</FormLabel>
              <FormSelect
                value={employee.position}
                onChange={(e) =>
                  setEmployee({
                    ...employee,
                    position: e.target.value as EmployeePosition,
                  })
                }
              >
                {EMPLOYEE_POSITIONS.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>
            {/* On active le bouton que si toutes les propriété de notre employé sont initialisées */}
            <Button
              variant="success"
              disabled={
                !employee.firstName ||
                !employee.lastName ||
                !employee.img ||
                !employee.position
              }
              className="w-100"
              onClick={async () => {
                handleReset();
                onCreate(employee as EmployeeData);
              }}
            >
              Create
            </Button>
          </Form>
        )}
      </CardBody>
    </Card>
  );
}
