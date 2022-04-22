export const ScheduleAction = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: ScheduleAction.SET_DATA,
    payload: data,
  });
