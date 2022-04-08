export const InitAddAction = {
  SET_INITADD_SCHEDULE: 'SET_INITADD_SCHEDULE',
};
export const setInitAddSchedule = data => dispatch =>
  dispatch({
    type: InitAddAction.SET_INITADD_SCHEDULE,
    payload: data,
  });
