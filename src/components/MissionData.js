import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission, toggleMission } from '../redux/feature/missionSlicer';

import '../style/table.css';

const MissionData = () => {
  const dispatch = useDispatch();
  // get missions data from the store
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMission());
    }
  }, []);

  const joinHandler = (e) => {
    dispatch(toggleMission(e.target.id));
  };

  return (
    <section className="table-section">
      <table className="table table-striped mission-table">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Reserve</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <th scope="row">{mission.name}</th>
              <td>{mission.description}</td>
              <td className="center">
                <p
                  className={`mission-status-${mission.reserved ? 'active' : 'not-active'}`}
                >
                  {mission.reserved ? 'Active Member' : 'Not A Member'}
                </p>
              </td>
              <td className="center">
                <button
                  id={mission.id}
                  className={`mission-button-${
                    mission.reserved ? 'leave' : 'join'
                  }`}
                  type="button"
                  onClick={joinHandler}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MissionData;
