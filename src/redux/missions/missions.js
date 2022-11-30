import { useSelector } from 'react';
import types from '../types';

const mission = useSelector((state) => state.missions);
console.log(mission);

const initialState = {
  missions: mission,
  reserved: false,
};

// Action Creator
export const joinMission = (id) => ({
  type: types.JOIN_MISSION, id,
});

// mission reducer: to update store
function missionReducer(state = initialState, action) {
  switch (action.type) {
    case types.JOIN_MISSION:
      return {
        ...state,
        missions: mission.filter((mission) => mission.id !== action.id),
        reserved: true,
      };
  }
}

export default missionReducer;
