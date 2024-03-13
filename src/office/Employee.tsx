import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";

// Représente les différents postes des employés du bureau
type EmployeePosition =
  | "RegionalManager"
  | "AssistantToTheRegionalManager"
  | "Receptionist"
  | "SaleRepresentative";

// Propriétés passées au composant React Employee
export type EmployeeProps = {
  firstName: string;
  lastName: string;
  img: string;
  position: EmployeePosition;
};

// Composant Employee décrit l'affichage d'un employé 
export function Employee({
  firstName,
  lastName,
  img,
  position,
}: EmployeeProps) {
  const fullName = `${firstName} ${lastName}`;
  const positionDescription = getPositionDescription(position);
  return (
    <Card className={`w-20 ${isMemberOfManagement(position) ? 'bg-info' : 'bg-secondary'}`}>
      <CardImg src={img}></CardImg>
      <CardBody>
        <CardTitle>{fullName}</CardTitle>
        {/* Rendu conditionnel de la description du poste de l'employé via la notation (valeur && <tag>Ce qui est rendu si la condition est vrai</tag>) */}
        {positionDescription && <CardText>{positionDescription}</CardText>}
      </CardBody>
    </Card>
  );
}

function getPositionDescription(position: EmployeePosition){
    switch(position){
        case "RegionalManager":
            return "Spends his time: 80% distracting others; 19% procrastination; and 1% critical thinking"
        case "AssistantToTheRegionalManager":
            return "Attempting to elevate himself to second-in-command to branch manager"
    }
    
}
function isMemberOfManagement(position: EmployeePosition){
    return position === 'RegionalManager'||position==='AssistantToTheRegionalManager'
}