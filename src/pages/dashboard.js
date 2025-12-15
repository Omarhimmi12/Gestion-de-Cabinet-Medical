import { useSelector } from "react-redux";

export default function Dashboard() {
  const today = new Date();
  const dateDuJour = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const patients = useSelector(state => state.patients.list);

  const patientsCount = patients.length;

  return (
    <div className="dashboard container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Tableau de Bord</h2>
        <span className="text-muted fw-semibold">{dateDuJour}</span>
      </div>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <i className="bi bi-cash-stack fs-1 text-success"></i>
              <h5 className="mt-3">CA du jour</h5>
              <p className="text-success fw-bold fs-4">4000 MAD</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h5 className="mt-3">Patients</h5>
              <p className="fw-bold fs-4">{patientsCount}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <i className="bi bi-calendar-check fs-1 text-info"></i>
              <h5 className="mt-3">Rendez-vous</h5>
              <p className="fw-bold fs-4">0</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <i className="bi bi-journal-medical fs-1 text-danger"></i>
              <h5 className="mt-3">Consultations</h5>
              <p className="fw-bold fs-4">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}