import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "./PatientsSlice";

export default function PatientDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients.list);

  useEffect(() => {
    if (patients.length === 0) {
      dispatch(fetchPatients());
    }
  }, [dispatch, patients.length]);

  const patient = patients.find(p => String(p.id) === id);
  if (!patient) return <p className="text-center mt-5">Patient introuvable.</p>;

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Dossier du Patient</h2>
        <Link to="/patients" className="btn btn-outline-dark">
          ← Retour
        </Link>
      </div>

      <div className="card shadow p-4">

        <h4 className="mb-4 border-bottom pb-2">{patient.nom} {patient.prenom}</h4>

        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <p className="mb-1 fw-bold">Âge</p>
            <div className="fs-5">{patient.age} ans</div>
          </div>          

          <div className="col-md-6 mb-3">
            <p className="mb-1 fw-bold">Email</p>
            <div className="fs-5">{patient.email}</div>
          </div>

          <div className="col-md-6 mb-3">
            <p className="mb-1 fw-bold">Téléphone</p>
            <div className="fs-5">{patient.telephone}</div>
          </div>

          <div className="col-md-6 mb-3">
            <p className="mb-1 fw-bold">Groupe Sanguin</p>
            <div className="badge bg-danger text-light fs-6">{patient.groupeSanguin}</div>
          </div>

          <div className="col-md-6 mb-3">
            <p className="mb-1 fw-bold">Adresse</p>
            <div className="fs-5">{patient.adresse}</div>
          </div>


          <div className="col-md-6 mb-3">
            <p className="mb-1 fw-bold">Allergies</p>
            <div className="fs-5">{patient.allergies || "Aucune"}</div>
          </div>

        </div>

      </div>
    </div>
  );
}