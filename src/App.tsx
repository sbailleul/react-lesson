import "@/App.scss";
import { Employee } from "@/office/Employee";
import  michael_scott from '@/assets/employees/michael_scott.jpg'
export function App() {
  return (
    <Employee
      firstname="Michael"
      lastname="Scott"
      img={michael_scott}
    ></Employee>
  );
}
