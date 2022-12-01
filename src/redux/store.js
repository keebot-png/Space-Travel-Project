import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './feature/missionSlicer';
import rocketSlicer from './feature/rocketSlicer';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketSlicer,
  },
});

export default store;
