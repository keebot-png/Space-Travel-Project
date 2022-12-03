import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './feature/missionSlicer';
import rocketSlice from './feature/rocketSlicer';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketSlice,
  },
});

export default store;
