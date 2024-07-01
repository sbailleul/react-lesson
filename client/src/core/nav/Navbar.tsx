import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [selectedNavItem, setSelectedNavItem] = useState<number>();
  return (
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <NavItem
            route="account"
            text="Account"
            onSelected={() => setSelectedNavItem(0)}
            isActive={selectedNavItem === 0}
          />
          <NavItem
            route="employees"
            text="Employees"
            onSelected={() => setSelectedNavItem(1)}
            isActive={selectedNavItem === 1}
          />
        </ul>
      </div>
    </nav>
  );
}
function NavItem({
  isActive,
  text,
  onSelected,
  route,
}: {
  isActive: boolean;
  text: string;
  onSelected: () => void;
  route: string;
}) {
  return (
    <NavLink
      to={route}
      onClick={onSelected}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      {text}
    </NavLink>
  );
}
