import { NavLink } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar bg-dark border-end border-secondary text-center" style={{ width: 250 }}>
      <div className="p-3">
        <h4>Menu</h4>
        <hr />
        <ul className="nav flex-column text-center">

          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link d-flex align-items-center gap-2">
              <i className="bi bi-speedometer2"></i>
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/patients" className="nav-link d-flex align-items-center gap-2">
              <i className="bi bi-people"></i>
              Patients
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/rendez-vous" className="nav-link d-flex align-items-center gap-2">
              <i className="bi bi-calendar-event"></i>
              Rendez-vous
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/consultations" className="nav-link d-flex align-items-center gap-2">
              <i className="bi bi-journal-medical"></i>
              Consultations
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/planning" className="nav-link d-flex align-items-center gap-2">
              <i className="bi bi-clock-history"></i>
              Planning
            </NavLink>
          </li>

        </ul>
      </div>
    </aside>
  );
}