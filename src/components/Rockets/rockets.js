import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fetchRocket } from '../../redux/feature/rocketSlicer';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  console.log(rockets);

  return (
  // <>
  //  {rockets.map((rocket) => (<Card style={styleContainer}>
  //     <div>
  //       <Card.Img style={styleImage} src={rocketImage} alt={rocketName} />
  //     </div>

  //     <Card.Body>
  //       <Card.Title>{rocketName}</Card.Title>
  //       <Card.Text style={styleDescription}>
  //         <Button
  //           disabled
  //           variant={reserve ? 'primary' : null}
  //           style={reserve ? { styling } : { display: 'none' }}
  //         >
  //           {reserve ? 'Reserved' : null}

  //         </Button>
  //         {rocketType}
  //       </Card.Text>
  //       <Button variant={reserve ? 'outline-secondary' : 'primary'} type="button" onClick={() => handleReserveRocket(rocketId)}>{reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
  //     </Card.Body>
  //   </Card>))}
  // </>
    <h1>Hi there</h1>
  );
};

export default Rocket;
