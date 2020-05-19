export const editPlayer = (updates, id) => ({
  type: 'EDIT_PLAYER',
  updates,
  id,
});

export const addPlayer = (player) => ({
  type: 'ADD_PLAYER',
  player,
});

export const setPlayer = (players) => ({
  type: 'SET_PLAYERS',
  players,
});
