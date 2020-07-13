const turnsDefaultState = [];

export default (state = turnsDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_TURN':
      return state.map((turn) => {
        console.log(action.no);
        if (turn.no === action.no) {
          console.log(turn);
          return { ...turn, ...action.updates, filled: true };
        } else {
          console.log(turn);
          return turn;
        }
      });
    case 'ADD_TURN':
      return [...state, { ...action.turn, filled: false }];
    case 'SET_TURNS':
      return action.turns.map((turn) => ({ ...turn, filled: false }));
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
