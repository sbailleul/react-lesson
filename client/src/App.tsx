import "@/App.scss";
import dwight_schrute from "@/assets/employees/dwight_schrute.jpg";
import jim_halper from "@/assets/employees/jim_halper.png";
import michael_scott from "@/assets/employees/michael_scott.jpg";
import pam_beesly from "@/assets/employees/pam_beesly.jpg";
import { Navbar } from "@/core/nav/Navbar";
import { ColorPickerWrapper } from "@/core/theme/ColorPickerWrapper";
import { ThemeProvider } from "@/core/theme/ThemeContext";
import { Employees } from "@/features/office/Employees";
import { IdentifiedEmployee } from "@/features/office/shared";

// On initialise la liste des employés en dehors du composant pour éviter de récréer cette variable à chaque fois que le composant App est rendu
const employees: IdentifiedEmployee[] = [
  {
    id: "uniq_1",
    firstName: "Michael",
    lastName: "Scott",
    position: "RegionalManager",
    img: michael_scott,
    pokemonName: "pikachu",
  },
  {
    id: "uniq_2",
    firstName: "Pam",
    lastName: "Beesly",
    position: "Receptionist",
    pokemonName: "bulbasaur",
    img: pam_beesly,
  },
  {
    id: "uniq_3",
    firstName: "Dwight",
    lastName: "Schrute",
    position: "AssistantToTheRegionalManager",
    pokemonName: "ivysaur",
    img: dwight_schrute,
  },
  {
    id: "uniq_4",
    firstName: "Jim",
    lastName: "Halper",
    position: "SaleRepresentative",
    pokemonName: "charmander",
    img: jim_halper,
  },
];

export function App() {
  return (
    <>
      <Navbar />
      <ThemeProvider>
        <ColorPickerWrapper />
        <div className="d-flex flex-wrap">
          <Employees employees={employees} />
        </div>
      </ThemeProvider>
    </>
  );
}
