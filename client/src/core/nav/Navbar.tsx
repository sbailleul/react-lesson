import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <NavItem route="articles/123" text="Article (123)" />
          <NavItem route="account" text="Account" />
          <NavItem route="employees" text="Employees" />
        </ul>
      </div>
    </nav>
  );
}
function NavItem({ text, route }: { text: string; route: string }) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {text}
    </NavLink>
  );
}
