export const InitSignUpActions = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: InitSignUpActions.SET_DATA,
    payload: data,
  });
