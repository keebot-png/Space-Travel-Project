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
