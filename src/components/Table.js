import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../redux/feature/missionSlicer';

import '../style/table.css';

const Table = () => {
  const [state, setState] = useState('NOT A MEMBER');
  const dispatch = useDispatch();
  // get missions data from the store
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  const joinHandler = (e) => {
    setState('Active Member');
    e.target.innerHTML = 'Leave Mission';
    e.target.className = 'leave-mission';
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
            <tr key={mission.mission_id}>
              <th scope="row">{mission.mission_name}</th>
              <td>{mission.description}</td>
              <td className="center">{state}</td>
              <td className="center">
                <button
                  id={mission.mission_id}
                  className="join-mission"
                  type="button"
                  onClick={joinHandler}
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
