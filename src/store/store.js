import { configureStore } from '@reduxjs/toolkit';
import patientsReducer from '../features/patients/PatientsSlice';
import rdvReducer from '../features/rdv/rdvSlice';
import consultationsReducer from '../features/consultations/consultationsSlice';

const store = configureStore({
  reducer: {
    patients: patientsReducer,
    rdv: rdvReducer,
    consultations: consultationsReducer,
  },
});

export default store;
