const playersDefaultState = [];

export default (state = playersDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_PLAYER':
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, ...action.updates };
        } else {
          return player;
        }
      });
    case 'ADD_PLAYER':
      return [...state, action.player];
    case 'SET_PLAYERS':
      return action.players;
    default:
      return state;
  }
};
// example
//  {
//     name: 'Pol Henry',
//     description: '',
//     rejectedCards: {
//       dimension: ['Large'],
//       locomotion: ['Tapis roulant'],
//       equipments: ['Frigo', 'Machine à café', 'Bureau'],
//     },
//   };
