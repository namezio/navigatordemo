export const GetScheduleAction = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: GetScheduleAction.SET_DATA,
    payload: data,
  });
