import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket, toggleRocket } from '../redux/feature/rocketSlicer';

const RocketData = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocket());
    }
  }, []);

  const reserveHandler = (e) => {
    dispatch(toggleRocket(e.target.id));
  };
  return (
    <div className="outer-container">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-container">
          <img
            src={rocket.image[0]}
            alt="rockets"
            className="rocket-image"
          />
          <div className="rocket-info">
            <h2 className="rocket-name">{rocket.name}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <p className={rocket.reserved ? 'reserved' : 'not-reserved'}>
                {`${rocket.reserved ? 'Reserved' : ''}`}
              </p>
              <p className="rocket-description">{rocket.description}</p>
            </div>
            <button
              type="button"
              onClick={reserveHandler}
              id={rocket.id}
              className={`${
                rocket.reserved ? 'cancel-reserve' : 'book-reserve'
              }`}
            >
              {`${rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}`}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketData;
