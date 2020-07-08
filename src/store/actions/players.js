export const editPlayer = (updates, id) => ({
  type: 'EDIT_PLAYER',
  updates,
  id,
});

export const addPlayer = (player) => ({
  type: 'ADD_PLAYER',
  player,
});

export const setPlayers = (players) => ({
  type: 'SET_PLAYERS',
  players,
});
