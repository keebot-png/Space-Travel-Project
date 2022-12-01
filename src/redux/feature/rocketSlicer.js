import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  status: null,
};

export const fetchRocket = createAsyncThunk(
  'rocket/fetch/',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rockets: [
        ...state.rockets.map((rocket) => (
          (rocket.rocketID !== action.payload) ? rocket : {
            ...rocket,
            reserve: !rocket.reserve,
          }
        )),
      ],
    }),
  },
  extraReducers: {
    [fetchRocket.pending]: (state) => {
      state.loading = true;
    },
    [fetchRocket.rejected]: (state) => {
      state.loading = false;
    },
    [fetchRocket.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
  },

});

export const { reserveRocket } = rocketSlice.actions;
export const allRockets = () => state.rockets.rockets;

export default rocketSlice.reducer;
