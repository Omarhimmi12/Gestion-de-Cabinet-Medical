import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchConsultations, deleteConsultation } from "./consultationsSlice";

export default function ConsultationList() {
  const dispatch = useDispatch();
  const consultations = useSelector(state => state.consultations.list);

  useEffect(() => {
    dispatch(fetchConsultations());
  }, [dispatch]);

  const handleDelete = id => {
    if (window.confirm("Voulez-vous vraiment supprimer cette consultation ?")) {
      dispatch(deleteConsultation(id));
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h2>Consultations</h2>
        <Link to="/consultations/ajouter" className="btn btn-primary">
          Nouvelle Consultation
        </Link>
      </div>

      <table className="table table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Motif</th>
            <th>Diagnostic</th>
            <th>Tarif</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {consultations.length === 0 ? (
            <tr>
              <td colSpan="6">Aucune consultation trouvée.</td>
            </tr>
          ) : (
            consultations.map(c => (
              <tr key={c.id}>
                <td>{c.patient}</td>
                <td>{c.date}</td>
                <td>{c.motif}</td>
                <td>{c.diagnostic}</td>
                <td>{c.tarif} DH</td>
                <td>
                  <Link to={`/consultations/modifier/${c.id}`} className="btn btn-warning btn-sm me-2">Modifier</Link>
                  <button onClick={() => handleDelete(c.id)} className="btn btn-danger btn-sm">Supprimer</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}