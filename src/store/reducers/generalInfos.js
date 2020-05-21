const generalInfosDefaultState = {
  date: 456,
  players: 6,
  animator: 'Pol',
  context: 'hello',
  observations: 'lorem ipsum',
  gameObservations: {
    setup: 'gfdgfd',
    acceptanceOftheGame: 'eazeza',
    attitudes: 'tretrete',
    ludicAspects: 'uytuyt',
    exchanges: 'ytrytr',
    vaProblematics: 'uytuytuty',
  },
};

export default (state = generalInfosDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_INFO':
      return { ...state, ...action.updates };
    case 'SET_INFO':
      return action.infos;
    default:
      return state;
  }
};
