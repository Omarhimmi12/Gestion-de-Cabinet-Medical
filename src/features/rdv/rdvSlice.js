import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/rendezVous";

// GET
export const fetchRDV = createAsyncThunk(
  "rdv/fetchRDV",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// POST
export const addRDV = createAsyncThunk(
  "rdv/addRDV",
  async (rdv) => {
    const res = await axios.post(API_URL, rdv);
    return res.data;
  }
);

// PUT
export const updateRDV = createAsyncThunk(
  "rdv/updateRDV",
  async ({ id, updates }) => {
    const res = await axios.put(`${API_URL}/${id}`, updates);
    return res.data;
  }
);

// DELETE
export const deleteRDV = createAsyncThunk(
  "rdv/deleteRDV",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

// SLICE
const rdvSlice = createSlice({
  name: "rdv",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchRDV.fulfilled, (state, action) => {
        state.list = action.payload.map(r => ({
          ...r,
          id: Number(r.id),
          patient: Number(r.patient)
        }));
      })

      // ADD
      .addCase(addRDV.fulfilled, (state, action) => {
        state.list.push({
          ...action.payload,
          id: Number(action.payload.id),
          patient: Number(action.payload.patient)
        });
      })

      // UPDATE
      .addCase(updateRDV.fulfilled, (state, action) => {
        const updated = {
          ...action.payload,
          id: Number(action.payload.id),
          patient: Number(action.payload.patient)
        };

        const index = state.list.findIndex(r => r.id === updated.id);
        if (index !== -1) state.list[index] = updated;
      })

      // DELETE
      .addCase(deleteRDV.fulfilled, (state, action) => {
        state.list = state.list.filter(r => r.id !== action.payload);
      });
  },
});

export default rdvSlice.reducer;