import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk(
  'mission/fetch',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMission.pending]: (state) => {
      state.loading = true;
    },
    [fetchMission.rejected]: (state) => {
      state.loading = false;
    },
    [fetchMission.fulfilled]: (state, action) => {
      state.loading = false;
     
    },
  },

});

export default missionSlice.reducer;
