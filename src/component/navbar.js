import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Cabinet Amrani</Link>
        <div className="d-flex">
          <span className="me-3">Bonjour, Dr. Amrani</span>
        </div>
      </div>
    </nav>
  );
}