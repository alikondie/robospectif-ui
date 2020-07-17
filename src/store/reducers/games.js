const gamesDefaultState = [];

export default (state = gamesDefaultState, action) => {
  switch (action.type) {
    case "SET_GAMES":
      return action.games;
    case "CLEAR_GAMES":
      return undefined;
    default:
      return state;
  }
};
