export const freeJoinActions = {
  SET_DATA: 'SET_DATA',
  SET_LOADING: 'SET_LOADING',
};

export const setData = data => dispatch =>
  dispatch({
    type: freeJoinActions.SET_DATA,
    payload: data,
  });

export const submit = data => (dispatch, getState) => {};
