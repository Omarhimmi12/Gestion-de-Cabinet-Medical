import { calculateAge } from "../../utils/age";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/patients";

// GET
export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// POST
export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (patient) => {
    const res = await axios.post(API_URL, patient);
    return res.data;
  }
);

// PUT
export const updatePatient = createAsyncThunk(
  "patients/updatePatient",
  async ({ id, updates }) => {
    const res = await axios.put(`${API_URL}/${id}`, updates);
    return res.data;
  }
);

// DELETE
export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

// SLICE
const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.list = action.payload.map((p) => ({
          ...p,
          id: Number(p.id),
          age: calculateAge(p.dateNaissance),
        }));
      })

      // ADD
      .addCase(addPatient.fulfilled, (state, action) => {
        state.list.push({
          ...action.payload,
          id: Number(action.payload.id),
          age: calculateAge(action.payload.dateNaissance),
        });
      })

      // UPDATE
      .addCase(updatePatient.fulfilled, (state, action) => {
        const updatedPatient = {
          ...action.payload,
          id: Number(action.payload.id),
          age: calculateAge(action.payload.dateNaissance),
        };

        const index = state.list.findIndex(
          (p) => p.id === updatedPatient.id
        );

        if (index !== -1) state.list[index] = updatedPatient;
      })

      // DELETE
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.list = state.list.filter((p) => p.id !== action.payload);
      });
  },
});

export default patientsSlice.reducer;