import { useDispatch, useSelector } from "react-redux";
import { addConsultation, updateConsultation } from "./consultationsSlice";
import { fetchPatients } from "../patients/PatientsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ConsultationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const consultationToEdit = useSelector(state =>
    state.consultations.list.find(c => c.id === Number(id))
  );

  const patients = useSelector(state => state.patients.list);

  const [form, setForm] = useState({
    patient: "",
    date: "",
    motif: "Consultation",
    diagnostic: "",
    ordonnance: "",
    tarif: "",
    modePaiement: "Espèces"
  });

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  useEffect(() => {
    if (consultationToEdit) {
      setForm({
        ...consultationToEdit,
        motif: consultationToEdit.motif || "Consultation"
      });
    }
  }, [consultationToEdit]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (id) {
      dispatch(updateConsultation({ id: Number(id), updates: form }));
    } else {
      dispatch(addConsultation(form));
    }

    navigate("/consultations");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Modifier" : "Ajouter"} une Consultation</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <select name="patient" className="form-control mb-2" value={form.patient} onChange={handleChange} required>
          <option value="">Sélectionner un patient</option>
          {patients.map(p => (
            <option key={p.id} value={`${p.nom} ${p.prenom}`}>
              {p.nom} {p.prenom}
            </option>
          ))}
        </select>

        <input type="date" className="form-control mb-2" name="date" value={form.date} onChange={handleChange} required />

        <select name="motif" className="form-control mb-2" value={form.motif} onChange={handleChange} required>
          <option value="Consultation">Consultation</option>
          <option value="Contrôle">Contrôle</option>
          <option value="Certificat">Certificat</option>
          <option value="Vaccination">Vaccination</option>
          <option value="Urgence">Urgence</option>
        </select>

        <textarea className="form-control mb-2" placeholder="Diagnostic" name="diagnostic" value={form.diagnostic} onChange={handleChange} />
        <textarea className="form-control mb-2" placeholder="Ordonnance" name="ordonnance" value={form.ordonnance} onChange={handleChange} />
        <input className="form-control mb-2" placeholder="Tarif (DH)" name="tarif" value={form.tarif} onChange={handleChange} />

        <select name="modePaiement" className="form-control mb-2" value={form.modePaiement} onChange={handleChange}>
          <option>Espèces</option>
          <option>Carte Bancaire</option>
          <option>Virement</option>
        </select>

        <button className="btn btn-success">Enregistrer</button>
      </form>
    </div>
  );
}