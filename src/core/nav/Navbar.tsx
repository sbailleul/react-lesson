import { useState } from "react";

export function Navbar() {
  const [selectedNavItem, setSelectedNavItem] = useState<number>();
  return (
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <NavItem
            text="React"
            onSelected={() => setSelectedNavItem(0)}
            isActive={selectedNavItem === 0}
          />
          <NavItem
            text="Angular"
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
}: {
  isActive: boolean;
  text: string;
  onSelected: () => void;
}) {
  return (
    <a onClick={onSelected} className={`nav-link ${isActive ? "active" : ""}`}>
      {text}
    </a>
  );
}
