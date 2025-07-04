import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          My App
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/students">
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
}
