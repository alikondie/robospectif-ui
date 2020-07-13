export const editTurn = (updates, no) => ({
  type: 'EDIT_TURN',
  updates,
  no,
});

export const addTurn = (turn) => ({
  type: 'ADD_TURN',
  turn,
});

export const setTurns = (turns) => ({
  type: 'SET_TURNS',
  turns,
});
