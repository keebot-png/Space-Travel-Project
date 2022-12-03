import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  loading: false,
};

export const fetchRocket = createAsyncThunk('rocket/fetch', async () => {
  const response = await axios.get(url);
  return response.data;
});

// generate new object
const generateObj = (data) => {
  const rockets = [];
  data.forEach((rocket) => {
    rockets.push({
      id: String(rocket.id),
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images,
      reserved: false,
    });
  });
  return rockets;
};
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleRocket: ({ rockets }, { payload }) => ({
      ...rockets,
      rockets: rockets.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: !rocket.reserved,
        };
      }),
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRocket.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchRocket.rejected, (state) => ({ ...state, loading: false }))
      .addCase(fetchRocket.fulfilled, (state, { payload }) => ({
        ...state,
        rockets: generateObj(payload),
        loading: false,
      }));
  },
});

export const { toggleRocket, reservedRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
