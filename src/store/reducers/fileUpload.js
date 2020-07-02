const fileUploadDefaultState = { isUploaded: false, step: 0 };

export default (state = fileUploadDefaultState, action) => {
  switch (action.type) {
    case 'ACTIVATE':
      return { isUploaded: true, step: 1 };
    case 'DEACTIVATE':
      return { isUploaded: false, step: 0 };
    case 'NEXT_STEP':
      const nextStep = ++state.step;
      return { ...state, step: nextStep };
    default:
      return state;
  }
};
