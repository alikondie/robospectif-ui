const playersDefaultState = [];

export default (state = playersDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_PLAYER':
      return state.map((player) => {
        if (player.id === action.id) {
          console.log('got here');
          return { ...player, ...action.updates, filled: true };
        } else {
          return player;
        }
      });
    case 'ADD_PLAYER':
      return [...state, { ...action.player, filled: false }];
    case 'SET_PLAYERS':
      return action.players.map((player) => ({ ...player, filled: false }));
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
