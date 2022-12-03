// import React from 'react';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import RocketData from '../components/RocketData';
// import { fetchRocket } from '../redux/feature/rocketSlicer';

// it('should test the rocket component', () => {
//     const rocket = render(
//         <Provider store={store}>
//             <Router>
//                 <RocketData />
//             </Router>
//         </Provider>,
//     );
//     expect(rocket).toMatchSnapshot();
// })

import Rocket from './__mock__/rocketSlice';

describe('Rocket must pass test', () => {
  test('Fetch Rocket must return data', () => {
    expect(Rocket.fetchRocket()).toBeDefined();
  });
  test('Fetch rocket return value length must be', () => {
    expect(Rocket.fetchRocket()).toHaveLength(4);
  });
  test('Fetch mission return name to be', () => {
    expect(Rocket.fetchRocket()[0].name).toBe('Rocket');
  });
});
