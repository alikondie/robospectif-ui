const generalInfosDefaultState = [];

export default (state = generalInfosDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_INFO':
      return { ...infos, ...action.updates };
  }
  return state;
};
