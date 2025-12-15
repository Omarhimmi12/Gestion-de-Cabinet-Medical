import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchRDV, deleteRDV } from "./rdvSlice";
import { fetchPatients } from "../patients/PatientsSlice";

export default function RdvList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rdv = useSelector(state => state.rdv.list);
  const patients = useSelector(state => state.patients.list);

  useEffect(() => {
    if (rdv.length === 0) dispatch(fetchRDV());
    if (patients.length === 0) dispatch(fetchPatients());
  }, [dispatch, rdv.length, patients.length]);

  const getPatient = (id) => patients.find(p => p.id === id);

  const getPatientName = (id) => {
    const p = getPatient(id);
    return p ? `${p.nom} ${p.prenom}` : "Patient introuvable";
  };

  const voirDetails = (patientId) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-content-center my-3">
        <h2>Gestion des Rendez-vous</h2>

        <Link to="/rendez-vous/ajouter" className="btn btn-primary">
          Nouveau RDV
        </Link>
      </div>

      <table className="table table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Motif</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {rdv.map(r => {
            const patient = getPatient(r.patient);
            return (
              <tr key={r.id}>
                <td style={{ cursor: patient ? "pointer" : "default" }} onClick={() => patient && voirDetails(patient.id)}
                  title={patient ? "Voir le dossier patient" : ""}>
                  {patient ? `${patient.nom} ${patient.prenom}` : "Patient introuvable"}
                </td>

                <td>{r.date}</td>
                <td>{r.heure}</td>
                <td>{r.motif}</td>
                <td>{r.statut}</td>

                <td>
                  <Link to={`/rendez-vous/modifier/${r.id}`} className="btn btn-warning btn-sm me-2">Modifier</Link>
                  <button onClick={() => dispatch(deleteRDV(r.id))} className="btn btn-danger btn-sm">Annuler</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
