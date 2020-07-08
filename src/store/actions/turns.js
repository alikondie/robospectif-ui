export const editTurn = (updates, id) => ({
  type: 'EDIT_TURN',
  updates,
  id,
});

export const addTurn = (turn) => ({
  type: 'ADD_TURN',
  turn,
});

export const setTurns = (turns) => ({
  type: 'SET_TURNS',
  turns,
});
