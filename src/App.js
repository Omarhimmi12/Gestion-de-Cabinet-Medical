import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import PatientsList from './features/patients/PatientsList';
import PatientDetails from './features/patients/PatientDetails';
import PatientForm from './features/patients/PatientForm';
import RdvList from './features/rdv/rdvList';
import RdvForm from './features/rdv/rdvForm';
import ConsultationList from './features/consultations/consultationList';
import ConsultationForm from './features/consultations/consultationForm';
import Planning from './pages/planning';
import Layout from './component/layout';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients" element={<PatientsList />} />
          <Route path="patients/ajouter" element={<PatientForm />} />
          <Route path="patients/modifier/:id" element={<PatientForm />} />
          <Route path="patients/:id" element={<PatientDetails />} />
          <Route path="rendez-vous" element={<RdvList />} />
          <Route path="rendez-vous/ajouter" element={<RdvForm />} />
          <Route path="rendez-vous/modifier/:id" element={<RdvForm />} />
          <Route path="consultations" element={<ConsultationList />} />
          <Route path="consultations/ajouter" element={<ConsultationForm />} />
          <Route path="consultations/modifier/:id" element={<ConsultationForm />} />
          <Route path="planning" element={<Planning />} />
        </Route>
        <Route path="*" element={<h2>Page non trouvée</h2>} />
      </Routes>
    </BrowserRouter>
  );
}