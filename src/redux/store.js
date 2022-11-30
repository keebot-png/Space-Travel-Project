import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './feature/missionSlicer';

const store = configureStore({
  reducer: {
    missions: missionSlice,
  },
});

export default store;
