import "@/App.scss";
import dwight_schrute from "@/assets/employees/dwight_schrute.jpg";
import jim_halper from "@/assets/employees/jim_halper.png";
import michael_scott from "@/assets/employees/michael_scott.jpg";
import pam_beesly from "@/assets/employees/pam_beesly.jpg";
import { Animal, Form } from "@/office/Animal";
import { Employees, IdentifiedEmployee } from "@/office/Employees";
import { Toto } from "@/office/Status";
import { TicTacToe } from "@/office/TicTacToe";
import { useState } from "react";

// On initialise la liste des employés en dehors du composant pour éviter de récréer cette variable à chaque fois que le composant App est rendu
const employees: IdentifiedEmployee[] = [
  {
    id: "uniq_1",
    firstName: "Michael",
    lastName: "Scott",
    position: "RegionalManager",
    img: michael_scott,
  },
  {
    id: "uniq_2",
    firstName: "Pam",
    lastName: "Beesly",
    position: "Receptionist",
    img: pam_beesly,
  },
  {
    id: "uniq_3",
    firstName: "Dwight",
    lastName: "Schrute",
    position: "AssistantToTheRegionalManager",
    img: dwight_schrute,
  },
  {
    id: "uniq_4",
    firstName: "Jim",
    lastName: "Halper",
    position: "SaleRepresentative",
    img: jim_halper,
  },
];

export function App() {
  const [user, setUser] = useState({ login: "" });
  return (
    <div className="d-flex">
      {/* <BurnMyComputer/> */}
      {/* <TicTacToe /> */}*
      <Form login={user.login} onLoginChanged={(login) => setUser({ login })} />
      <Animal name="toto" onBark={() => alert("BARK")} />
      <Toto />
      <Toto />
      <Toto />
      {/* <Employees employees={employees} /> */}
    </div>
  );
}
