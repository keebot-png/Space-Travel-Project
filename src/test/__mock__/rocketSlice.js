export default class Rocket {
  static fetchRocket() {
    const response = {
      data: [
        {
          id: 1,
          name: 'Rocket',
          description: 'Awesome Rocket',
          reserved: false,
        },
        {
          id: 2,
          name: 'Space Ship',
          description: 'Awesome Ship',
          reserved: false,
        },
        {
          id: 3,
          name: 'UFO',
          description: 'Awesome UFO',
          reserved: false,
        },
        {
          id: 4,
          name: 'Death Star',
          description: 'Awesome Star Wars ship',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
