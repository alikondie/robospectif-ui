const debatesDefaultState = [];

export default (state = debatesDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_DEBATE':
      return state.map((debate) => {
        if (debate.id === action.id) {
          return { ...debate, ...action.updates, filled: true };
        } else {
          return debate;
        }
      });
    case 'ADD_DEBATE':
      return [...state, { ...action.debate, filled: false }];
    case 'SET_DEBATES':
      return action.debates.map((debate) => ({ ...debate, filled: false }));
    default:
      return state;
  }
};

// {
// "id":  "1"
//     "turn": "1",
//     "player": "1",
//     "character": "",
//     "environment": "",
//     "proposedUsage": "",
//     "ReceivedArguments": [
//       { "player": "2", "token": "", "debate": "" },
//       { "player": "2", "token": "", "debate": "" }
//     ]
//   },
