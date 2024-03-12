import "@/App.scss";
import { Employee } from "@/office/Employee";
import michael_scott from "@/assets/employees/michael_scott.jpg";
import pam_beesly from "@/assets/employees/pam_beesly.jpg";
export function App() {
  return (
    <div className="d-flex">
      <Employee
        firstName="Michael"
        lastName="Scott"
        position="RegionalManager"
        img={michael_scott}
      ></Employee>
      <Employee
        firstName="Pam"
        lastName="Beesly"
        position="Receptionist"
        img={pam_beesly}
      ></Employee>
    </div>
  );
}
