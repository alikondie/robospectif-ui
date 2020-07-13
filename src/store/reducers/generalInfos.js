const generalInfosDefaultState = {
  date: 0,
  numberOfPlayers: 0,
  animator: '',
  context: '',
  observations: '',
  gameObservations: {
    setup: '',
    acceptanceOftheGame: '',
    attitudes: '',
    ludicAspects: '',
    exchanges: '',
    vaProblematics: '',
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
