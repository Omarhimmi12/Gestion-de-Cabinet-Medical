import { useDispatch, useSelector } from "react-redux";
import { addPatient, updatePatient } from "./PatientsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PatientForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const editPatient = useSelector(state =>
    state.patients.list.find(p => p.id === Number(id))
  );

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    telephone: "",
    adresse: "",
    email: "",
    groupeSanguin: "",
    allergies: ""
  });

  useEffect(() => {
    if (editPatient) {
      setForm(editPatient);
    }
  }, [editPatient]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (id) {
      dispatch(updatePatient({ id: Number(id), updates: form }));
    } else {
      dispatch(addPatient(form));
    }

    navigate("/patients");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Modifier" : "Ajouter"} un Patient</h2>

      <form onSubmit={handleSubmit} className="mt-3">

        <input type="text" value={form.nom} onChange={handleChange} className="form-control mb-2" placeholder="Nom" name="nom" required/>

        <input type="text" value={form.prenom} onChange={handleChange} className="form-control mb-2" placeholder="Prénom" name="prenom" required/>

        <label className="text-muted">Date de naissance</label>
        <input type="date" value={form.dateNaissance} onChange={handleChange} className="form-control mb-2" name="dateNaissance" required/>

        <input value={form.telephone} onChange={handleChange} className="form-control mb-2" placeholder="Téléphone" name="telephone" required/>

        <textarea value={form.adresse} onChange={handleChange} placeholder="Adresse" name="adresse" className="form-control mb-2"/>

        <input value={form.email} onChange={handleChange} className="form-control mb-2" placeholder="Email" name="email"/>

        <input value={form.groupeSanguin} onChange={handleChange} className="form-control mb-2" placeholder="Groupe sanguin" name="groupeSanguin"/>

        <textarea value={form.allergies} onChange={handleChange} className="form-control mb-2" placeholder="Allergies" name="allergies"/>

        <button className="btn btn-success">Enregistrer</button>
      </form>
    </div>
  );
}