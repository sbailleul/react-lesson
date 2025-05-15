export function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/students">Students</a>
          </div>
        </div>
      </nav>
  )
}
