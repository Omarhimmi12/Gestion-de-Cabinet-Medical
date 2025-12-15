import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients, deletePatient } from "./PatientsSlice";

export default function PatientsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patients = useSelector(state => state.patients.list);

  useEffect(() => {
    if (patients.length === 0) {
      dispatch(fetchPatients());
    }
  }, [dispatch, patients.length]);

  const voirDetails = (id) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h2>Liste des Patients</h2>
        <Link to="/patients/ajouter" className="btn btn-primary">
          Ajouter
        </Link>
      </div>

      <table className="table table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Nom Complet</th>
            <th>Téléphone</th>
            <th>Âge</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td style={{ cursor: "pointer" }} onClick={() => voirDetails(patient.id)}>{patient.nom} {patient.prenom}</td>
              <td style={{ cursor: "pointer" }} onClick={() => voirDetails(patient.id)}>{patient.telephone}</td>
              <td style={{ cursor: "pointer" }} onClick={() => voirDetails(patient.id)}> {patient.age} ans</td>

              <td>
                <Link to={`/patients/modifier/${patient.id}`}  className="btn btn-warning btn-sm me-1">Modifier</Link>
                <button onClick={() => dispatch(deletePatient(patient.id))} className="btn btn-danger btn-sm">Supprimer</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}