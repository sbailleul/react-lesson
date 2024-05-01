import { Pokemon } from "@/features/office/Pokemon";
import {
  getPositionDescription,
  isMemberOfManagement,
  toFullName,
} from "@/features/office/shared";
import type { Employee } from "@/features/office/shared";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "react-bootstrap";

// Propriétés passées au composant React Employee
export type EmployeeProps = {
  onDismiss: () => void;
} & Employee;

// Composant Employee décrit l'affichage d'un employé
export function Employee({
  firstName,
  lastName,
  img,
  position,
  onDismiss,
  pokemonName,
}: EmployeeProps) {
  const fullName = toFullName(firstName, lastName);
  const [show, setShow] = useState(false);
  const positionDescription = getPositionDescription(position);
  const handleSayHelloClick = () => alert("Hello");

  return (
    <>
      <Card
        className={`col-2 ${
          isMemberOfManagement(position) ? "bg-info" : "bg-secondary"
        }`}
      >
        <CardImg src={img}></CardImg>
        <CardBody className="d-flex flex-column">
          <CardTitle>{fullName}</CardTitle>
          {/* Rendu conditionnel de la description du poste de l'employé via la notation (valeur && <tag>Ce qui est rendu si la condition est vrai</tag>) */}
          {positionDescription && <CardText>{positionDescription}</CardText>}
          <div className="d-flex mt-auto">
            {/* On peut réagir à l'évènement de click sur le bouton en passant une fonction nommée event handler dans notre cas handleSayHelloClick */}
            {/*
          L'event handler peut être une fonction inline
         <Button variant="success" className="w-100 mt-auto" onClick={() => alert("Hello")}>Talk</Button> 
         <Button variant="success" className="w-100 mt-auto" onClick={function(){alert("Hello")}}>Talk</Button> 
         */}
            <Button
              variant="success"
              className="flex-grow-1"
              onClick={handleSayHelloClick}
            >
              Talk
            </Button>
            {
              // On affiche le bouton de licenciement uniquement si l'employé n'est pas le directeur régional
              position !== "RegionalManager" && (
                <Button variant="danger" className="w-50" onClick={onDismiss}>
                  Dismiss
                </Button>
              )
            }

            <Button
              variant="warning"
              className="w-50"
              onClick={() => setShow(true)}
            >
              Pokemon
            </Button>
          </div>
        </CardBody>
      </Card>
      <Pokemon show={show} onHide={() => setShow(false)} name={pokemonName} />
    </>
  );
}
