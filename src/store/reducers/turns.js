const turnsDefaultState = [];

export default (state = turnsDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_TURN':
      return state.map((turn) => {
        if (turn.id === action.id) {
          return { ...turn, ...action.updates };
        } else {
          return turn;
        }
      });
    case 'ADD_TURN':
      return [...state, action.turn];
    case 'SET_TURNS':
      return action.turns;
    default:
      return state;
  }
};

// "turns": [
//     {
//       "no": 1,
//       "conceptor": 1,
//       "car": {
//         "dimension": "",
//         "locomotion": "",
//         "automation": "",
//         "equipments": []
//       },
//       "debates": [
//         {
//           "player": "1",
//           "character": "",
//           "environment": "",
//           "proposedUsage": "",
//           "ReceivedArguments": [
//             { "player": "2", "token": "", "debate": "" },
//             { "player": "2", "token": "", "debate": "" }
//           ]
//         },
//         {
//           "player": "2",
//           "character": "",
//           "environment": "",
//           "proposedUsage": "",
//           "ReceivedArguments": [
//             { "player": "3", "token": "", "debate": "" },
//             { "player": "1", "token": "", "debate": "" }
//           ]
//         }
//       ]
//     },
