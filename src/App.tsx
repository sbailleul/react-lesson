import "@/App.scss";
import dwight_schrute from "@/assets/employees/dwight_schrute.jpg";
import jim_halper from "@/assets/employees/jim_halper.png";
import michael_scott from "@/assets/employees/michael_scott.jpg";
import pam_beesly from "@/assets/employees/pam_beesly.jpg";
import { Employees, IdentifiedEmployee } from "@/office/Employees";
import { ColorPicker } from "@/theme/ColorPicker";

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
  return (
    <div className="d-flex flex-wrap">
      <Employees employees={employees} />
      <ColorPicker />
    </div>
  );
}
