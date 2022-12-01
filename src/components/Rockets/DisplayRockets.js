import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket, reserveRocket } from '../../redux/feature/rocketSlicer';
import RocketItem from './RocketItem';

function Rocket() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  console.log(rockets);

  return (
    <main>
      <div>
        <RocketItem rockets={rockets} handleReserveRocket={handleReserveRocket} />
      </div>
    </main>
  );
}

// export default Rocket;

// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const styling = {
//   display: 'inline-block',
//   backgroundColor: '#18A2B8',
//   height: '2rem',
//   borderRadius: '3px',
//   border: 'none',
//   opacity: '1',
//   margin: '0 8px',
//   fontSize: '15px',
//   padding: '1px 8px',
// };

// const styleContainer = {
//   margin: '0.5rem auto',
//   width: '90%',
//   display: 'flex',
//   flexDirection: 'row',
//   gap: '0.5rem',
//   height: '15rem',
//   alignItems: 'center',
//   padding: '10px',
//   border: 'none',
// };

// const styleImage = {
//   width: '100px',
// };

// const styleDescription = {
//   fontSize: '20px',
// };

// const Rocket = () => {
//     const handleClick = (name) => {
//         console.log(`Hi there ${name}`);
//     };
//  return (
//   <main>
//     <Card style={styleContainer}>
//       <div>
//         <Card.Img style={styleImage} src="http://placekitten.com/g/200/300" alt="Cat photo" />
//       </div>

//       <Card.Body>
//         <Card.Title>Nice Cat</Card.Title>
//         <Card.Text style={styleDescription}>
//           <Button
//             disabled
//             variant={"primary" ? 'primary' : null}
//             style={{ styling } ? { styling } : { display: 'none' }}
//           >
//             {'Reserved' ? 'Not Reserved' : 'Reserved'}

//           </Button>
//           Color Cat is the best cat that I have ever seen. It matches my favorite color!!!!!
//         </Card.Text>
//         <Button variant={'primary' ? 'outline-secondary' : 'primary'} type="button" onClick={() => handleClick('John')}>{"Reserve Rocket" ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
//       </Card.Body>
//     </Card>
//   </main>
//   )
// };

// export default Rocket;
