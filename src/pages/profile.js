import React from 'react';
// import list group from react-component
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

import '../style/profile.css';

const Profile = () => {
  // get missions and rockets data from store
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  // filter out only mission and rocket have been reserved
  const mission = missions.filter((mission) => mission.reserved);
  const rocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="Profile">
      <ListGroup className="mission table">
        <h2>My Mission</h2>
        {mission.map((ms) => (
          <ListGroup.Item key={ms.id}>{ms.name}</ListGroup.Item>
        ))}
      </ListGroup>
      <ListGroup className="rocket table">
        <h2>My rocket</h2>
        {rocket.map((rm) => (
          <ListGroup.Item key={rm.id}>{rm.reserved ? rm.name : 'Rocket Store Empty'}</ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

export default Profile;
