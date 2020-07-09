export const editDebate = (updates, id) => ({
  type: 'EDIT_DEBATE',
  updates,
  id,
});

export const addDebate = (debate) => ({
  type: 'ADD_DEBATE',
  debate,
});

export const setDebates = (debates) => ({
  type: 'SET_DEBATES',
  debates,
});
