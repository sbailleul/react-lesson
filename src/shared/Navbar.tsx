import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <NavLink
          to={"/account"}
          className={({ isActive }) =>
            isActive ? "text-success" : "text-primary" 
          }
        >
          Account
        </NavLink>
        <NavLink
          to={"/students"}
          className={({ isActive }) =>
            isActive ? "text-success" : "text-primary" 
          }
        >
          Etudiants
        </NavLink>
      </ul>
    </nav>
  );
}
