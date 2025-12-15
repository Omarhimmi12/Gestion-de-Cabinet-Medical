import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/consultations";

// GET
export const fetchConsultations = createAsyncThunk(
  "consultations/fetchConsultations",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// POST
export const addConsultation = createAsyncThunk(
  "consultations/addConsultation",
  async (consultation) => {
    const res = await axios.post(API_URL, consultation);
    return res.data;
  }
);

// PUT
export const updateConsultation = createAsyncThunk(
  "consultations/updateConsultation",
  async ({ id, updates }) => {
    const res = await axios.put(`${API_URL}/${id}`, updates);
    return res.data;
  }
);

// DELETE
export const deleteConsultation = createAsyncThunk(
  "consultations/deleteConsultation",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const consultationsSlice = createSlice({
  name: "consultations",
  initialState: { list: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConsultations.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addConsultation.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateConsultation.fulfilled, (state, action) => {
        const index = state.list.findIndex(c => c.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteConsultation.fulfilled, (state, action) => {
        state.list = state.list.filter(c => c.id !== action.payload);
      });
  },
});

export default consultationsSlice.reducer;
