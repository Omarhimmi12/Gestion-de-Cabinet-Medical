import { useDispatch, useSelector } from "react-redux";
import { addRDV, updateRDV } from "./rdvSlice";
import { fetchPatients } from "../patients/PatientsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RdvForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const rdvToEdit = useSelector(state =>
    state.rdv.list.find(r => r.id === Number(id))
  );

  const patients = useSelector(state => state.patients.list);

  const [form, setForm] = useState({
    patient: "",
    date: "",
    heure: "",
    motif: "Consultation",
    statut: "En attente"
  });

  useEffect(() => {
    if (patients.length === 0) dispatch(fetchPatients());
  }, [dispatch, patients.length]);

  useEffect(() => {
    if (rdvToEdit) {
      setForm({
        patient: String(rdvToEdit.patient),
        date: rdvToEdit.date,
        heure: rdvToEdit.heure,
        motif: rdvToEdit.motif,
        statut: rdvToEdit.statut
      });
    }
  }, [rdvToEdit]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      ...form,
      patient: Number(form.patient),
    };

    if (id) {
      dispatch(updateRDV({ id: Number(id), updates: data }));
    } else {
      dispatch(addRDV(data));
    }

    navigate("/rendez-vous");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Modifier" : "Ajouter"} un Rendez-vous</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        
        <select value={form.patient} name="patient" onChange={handleChange} className="form-control mb-2" required>
          <option value="">Sélectionner un patient</option>
          {patients.map(p => (
            <option key={p.id} value={p.id}>{p.nom} {p.prenom}</option>
          ))}
        </select>

        <input type="date" value={form.date} onChange={handleChange} name="date" className="form-control mb-2" required/>
        <input type="time" value={form.heure} onChange={handleChange} name="heure" className="form-control mb-2" required/>

        <select value={form.motif} onChange={handleChange} name="motif" className="form-control mb-2">
          <option>Consultation</option>
          <option>Contrôle</option>
          <option>Certificat</option>
          <option>Vaccination</option>
          <option>Urgence</option>
        </select>

        <select name="statut" value={form.statut} onChange={handleChange} className="form-control mb-2">
          <option>Confirmé</option>
          <option>En attente</option>
          <option>Honoré</option>
          <option>Annulé</option>
        </select>

        <button className="btn btn-success">Enregistrer</button>
      </form>
    </div>
  );
}