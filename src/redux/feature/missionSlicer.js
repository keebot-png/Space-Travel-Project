/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// mission url
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  loading: false,
};

// fetch missions data
export const fetchMission = createAsyncThunk(
  'mission/fetch',
  async () => {
    const response = await axios.get(url);
    return response.data
  },
);

// generate new obj
const generateObj = (data) => {
  const missions = [];
  data.forEach((mission) => {
    missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  return missions
}

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMission: ({missions}, {payload}) => ({
      ...missions,
      missions: missions.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        else {
          return {
            ...mission,
            reserved: !mission.reserved,
          }
        }
      })
    }),
    reservedMissions: ({ missions }) => ({
      reservation: missions.map((mission) => {
        if (mission.reserved === true) {
          return mission;
        }
        return { ...mission };
      })
    })
  },
  extraReducers(builder){
    builder
      .addCase(fetchMission.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchMission.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        missions: generateObj(payload),
      }))
    .addCase(fetchMission.rejected, (state) =>({...state, loading:false}))
  },

});

export const { toggleMission ,reservedMissions } = missionSlice.actions;
export default missionSlice.reducer;
