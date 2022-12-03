// import React from 'react';
// import { render } from '@testing-library/react';
// // import renderer from 'react-test-renderer';
// import '@testing-library/jest-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import store from '../redux/store';
// import MissionData from '../components/MissionData';

// it('Test the mission component', () => {
//     const mission = render(
//         <Provider store={store}>
//             <Router>
//                 <MissionData />
//             </Router>
//         </Provider>
//     );
//     expect(mission).toMatchSnapshot();
// })

// test('matches snapshot', () => {
//     const tree = renderer.create(<MissionData />).toJSON();
//     expect(tree).toMatchSnapshot();
// })

import Mission from './__mock__/missionSlice';

describe('Mission must pass the test', () => {
  test('Fetch mission must return data', () => {
    expect(Mission.fetchMission()).toBeDefined();
  });
  test('Fetch mission return value length must be', () => {
    expect(Mission.fetchMission()).toHaveLength(3);
  });
  test('Fetch mission return name to be', () => {
    expect(Mission.fetchMission()[1].name).toBe('Commit is key to success');
  });
});
